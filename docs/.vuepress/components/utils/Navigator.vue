<template>
  <svg class="tree-diagram" :viewBox="viewBox">
    <circle cx="0" cy="0" r="5" fill="red"></circle>
    <g class="container" ref="container" :transform="adjustTransform">
      <g
        class="links-container"
        fill="none"
        stroke="#555"
        stroke-opacity="0.4"
        stroke-width="1.5"
      >
        <path
          v-for="link of links"
          :key="link.target.data.name"
          :d="linkPath(link)"
        ></path>
      </g>
      <g
        class="nodes-cotainer"
        pointer-events="all"
        style="font: 14px sans-serif"
      >
        <g
          v-for="node of nodes"
          :key="node.data.name"
          :cursor="node.data.children ? 'default' : 'pointer'"
          @click="clickHandler(node)"
          :transform="`translate(${node.y}, ${node.x})`"
        >
          <text
            dy="0.35em"
            x="0.6em"
            :text-anchor="node.parent ? 'start' : 'end'"
            :font-weight="node.parent ? 'normal' : 'bold'"
            stroke-linejoin="round"
            stroke-width="5"
            stroke="rgba(243, 244, 246, 1)"
          >
            {{ text(node) }}
          </text>
          <text
            dy="0.35em"
            x="0.6em"
            :text-anchor="node.parent ? 'start' : 'end'"
            :font-weight="node.parent ? 'normal' : 'bold'"
          >
            {{ text(node) }}
          </text>
          <svg
            v-if="!node.data.children && node.parent"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#2f89fc"
            viewBox="0 0 16 16"
            x="-0.6em"
            y="-0.6em"
          >
            <path
              d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"
            />
          </svg>
          <svg
            v-if="node.data.children && node.parent"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#feb062"
            viewBox="0 0 16 16"
            x="-0.6em"
            y="-0.6em"
          >
            <path
              d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
            />
          </svg>

          <title>{{ text(node) }}</title>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";

export default {
  props: ["site", "width", "height"],
  data() {
    return {
      tree: null,
      level: 0,
      dx: 25,
      nodes: null,
      links: null,
      zoom: null,
      transform: {
        x: 0,
        y: 0,
        k: 1,
      },
    };
  },
  computed: {
    dy() {
      return this.width / (this.level + 2);
    },
    viewBox() {
      return `${-this.dy}, ${-this.height / 2}, ${this.width}, ${this.height}`;
    },
    adjustTransform() {
      // if (this.zoomType === "click") {
      //   return `scale(${this.transform.k}) translate(${this.transform.x}, ${this.transform.y})`;
      // }
      return `translate(${this.transform.x}, ${this.transform.y}) scale(${this.transform.k}) `;
    },
  },
  watch: {
    site() {
      this.getTreeData();
      this.buildTree();
    },
    width() {
      this.buildTree();
    },
    height() {
      this.buildTree();
    },
  },
  methods: {
    getPosts() {
      let posts = [];
      this.$site.pages.forEach((post) => {
        if (
          !post.relativePath ||
          post.frontmatter.omitList ||
          post.relativPath === "README.md"
        )
          return;
        const category = post.relativePath.split("/")[0];
        if (this.site !== "all" && category !== this.site) return;
        posts.push(post);
      });
      // console.log(posts);
      return posts;
    },
    getTreeData() {
      const postsList = this.getPosts();
      const data = buildTreeData(postsList);

      const treeData = {
        name: this.site.toUpperCase(),
        data: {
          title: this.site,
          path: "#",
        },
        children: data,
      };

      this.tree = d3.hierarchy(treeData);
      this.level = this.tree.height;
    },
    buildTree() {
      // 计算节点的层次布局，为 this.root 的每个节点添加坐标属性
      d3.tree().nodeSize([this.dx, this.dy])(this.tree);
      // 节点数据数组
      this.nodes = this.tree.descendants();
      // console.log(this.nodes);
      // 连线数据数组
      this.links = this.tree.links();
      // console.log(this.links);
    },
    linkPath(link) {
      const linkGenerator = d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x);
      return linkGenerator(link);
    },
    text(node) {
      const len = Math.floor(this.dy / 14);
      let text = "";

      if (node.children) {
        text = node.data.name;
      } else {
        text = node.data.data.title;
      }

      if (text.length > len) {
        return `${text.substr(0, len).trim()}...`;
      }
      return text;
    },
    clickHandler(node) {
      // console.log(node);
      window.open(node.data.data.path);
    },
    zoomHandler(event) {
      // this.zoomType = "click";

      // console.log(event);
      // const { x, y, k } = event.transform;
      this.transform = event.transform;
    },
  },
  created() {
    this.getTreeData();
    this.buildTree();
  },
  mounted() {
    // 响应用户主动缩放和拖移操作
    const zoom = d3.zoom().scaleExtent([0.5, 10]).on('zoom', this.zoomHandler);
    d3.select('.tree-diagram').call(zoom);
  },
};

function buildTreeData(postsList) {
  let tree = [];

  postsList.forEach((post) => {
    const paths = post.relativePath.split("/").slice(1);
    const mdReg = /\.md$/;
    let currentLevel = tree;
    paths.forEach((path) => {
      let existingPath = getLocation(currentLevel, "name", path);

      if (existingPath) {
        currentLevel = existingPath.children;
      } else if (mdReg.test(path)) {
        const newPath = {
          name: path,
          data: post,
        };
        currentLevel.push(newPath);
      } else {
        const newPath = {
          name: path,
          children: [],
        };

        currentLevel.push(newPath);
        currentLevel = newPath.children;
      }
    });
  });

  return tree;
}

function getLocation(array, key, value) {
  let t = 0; // t is used as a counter
  while (t < array.length && array[t][key] !== value) {
    t++;
  }

  if (t < array.length) {
    return array[t];
  } else {
    return false;
  }
}
</script>

<style>
</style>