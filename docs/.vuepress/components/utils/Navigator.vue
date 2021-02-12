<template>
  <svg class="tree-diagram" :viewBox="viewBox">
    <circle cx="0" cy="0" r="5" fill="red"></circle>
    <g class="container" ref="container" :transform="adjustTransform">
      <g class="links-container" fill="none" stroke="#555" stroke-opacity="0.4" stroke-width="1.5">
        <path v-for="link of links" :key="link.target.data.name" :d="linkPath(link)"></path>
      </g>
      <g class="nodes-cotainer" pointer-events="all" style="font: 14px sans-serif;">
        <g v-for="node of nodes" :key="node.data.name" :cursor="node.data.children ? 'default' : 'pointer'" @click="clickHandler(node)" :transform="`translate(${node.y}, ${node.x})`">
          <text dy="0.35em" x="0.8em" text-anchor="start" stroke-linejoin="round" stroke-width="5" stroke="rgba(243, 244, 246, 1)">
            {{ text(node) }}
          </text>
          <text dy="0.35em" x="0.8em" text-anchor="start">
            {{ text(node) }}
          </text>
          <!-- <svg v-if="!node.data.children && node.parent" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2f89fc" viewBox="0 0 16 16" x="-0.6em" y="-0.6em">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg> -->
          <svg v-if="!node.data.children && node.parent" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2f89fc" viewBox="0 0 16 16" x="-0.6em" y="-0.6em">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
          </svg>
          <svg v-if="node.data.children && node.parent" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#feb062" viewBox="0 0 16 16" x="-0.6em" y="-0.6em">
            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
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
    buildTree() {
      // 计算节点的层次布局，为 this.root 的每个节点添加坐标属性
      d3.tree().nodeSize([this.dx, this.dy])(this.tree);
      // 节点数据数组
      this.nodes = this.tree.descendants();
      console.log(this.nodes);
      // 连线数据数组
      this.links = this.tree.links();
      console.log(this.links);
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

      console.log(text);

      if (text.length > len) {
        return `${text.substr(0, len).trim()}...`;
      }
      return text;
    },
    clickHandler(node) {
      console.log(node);
    },
    zoomHandler(event) {
      // this.zoomType = "click";

      // console.log(event);
      // const { x, y, k } = event.transform;
      this.transform = event.transform;
    },
  },
  created() {
    const postsList = this.getPosts();
    const data = buildTreeData(postsList);

    const treeData = {
      name: this.site,
      data: {
        title: this.site,
        path: "#",
      },
      children: data,
    };
    // console.log(this.treeData);

    this.tree = d3.hierarchy(treeData);
    console.log(this.tree);
    this.level = this.tree.height;
    this.buildTree();
  },
  mounted() {
    //   console.log(family);
    //   /**
    //    * ---Step2---
    //    * 计算层次布局
    //    * d3.tree()
    //    */
    //   const width = 500;
    //   const tree = (data) => {
    //     const root = data;
    //     // 设置树布局的节点尺寸
    //     root.dx = 15; // 固定垂直宽度
    //     root.dy = width / (root.height + 1); // 水平宽度按照节点的「高度」（层级）进行均分
    //     // nodeSize([width, height]) 参数设定与垂直相反
    //     return d3.tree().nodeSize([root.dx, root.dy])(root);
    //   };
    //   let root = tree(family);
    //   console.log(root);
    //   /**
    //    * ---Step3---
    //    * 绘制静态树图
    //    */
    //   // 遍历所有节点，获取坐标（纵轴）范围，x1 最大值，x0 最小值
    //   let x0 = Infinity;
    //   let x1 = -x0;
    //   root.each((d) => {
    //     if (d.x > x1) x1 = d.x;
    //     if (d.x < x0) x0 = d.x;
    //   });
    //   console.log(x0, x1);
    //   // 创建 svg 元素，设置合适的视窗 viewBox 大小
    //   const svg = d3
    //     .create("svg")
    //     .attr("viewBox", [0, 0, width, x1 - x0 + root.dx * 2]);
    //   // 设置 svg 容器 <g> 内文本的样式，并进行适当的偏移，避免文本被遮挡
    //   const g = svg
    //     .append("g")
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", 10)
    //     .attr("transform", `translate(${root.dy / 3},${root.dx - x0})`);
    //   // 绘制节点间的连线，使用了 d3.shape 模块的 linkHorizontal() 方法
    //   const link = g
    //     .append("g")
    //     .attr("fill", "none")
    //     .attr("stroke", "#98C379")
    //     .attr("stroke-opacity", 0.4)
    //     .attr("stroke-width", 1.5)
    //     .selectAll("path")
    //     .data(root.links()) // 为 <path> 元素绑定数据，root.links() 返回 node 的 links 数组，每个 link 是一个定义了 source 和 target 属性的对象
    //     .join("path")
    //     // 使用 d3.linkHorizontal() 方法生成曲线（源点到目标点的光滑的三次贝塞尔曲线），终点和起点处的切线是水平方向的
    //     // 指定
    //     .attr(
    //       "d",
    //       d3
    //         .linkHorizontal()
    //         .x((d) => d.y) // 由于树图是水平方向，需要调用 link 生成器的方法 .x() 和 .y() 调换 x 和 y 值
    //         .y((d) => d.x)
    //     );
    //   console.log(root.links());
    //   // 绘制节点
    //   const node = g
    //     .append("g")
    //     .selectAll("g")
    //     .data(root.descendants()) // 为 <g> 元素绑定数据，root.descendants() 返回根节点的所有后代节点数组
    //     .join("g")
    //     .attr("transform", (d) => `translate(${d.y},${d.x})`); // 由于树图是水平方向，需要调偏移的 x 和 y 值
    //   node
    //     .append("text")
    //     .attr("dy", "0.25em") // 元素默认定位在父元素 <g> 左上角，为了字体居中，需要将 <text> 向下偏移
    //     .attr("x", (d) => (d.children ? -6 : 6)) // 如果是有子节点，文本向左偏移，否则向右偏移
    //     .attr("text-anchor", (d) => (d.children ? "end" : "start")) // 如果是有子节点，文本向左伸展，否则文本向右伸展
    //     .text((d) => d.data.name) // 使用 d3.selection 模块的 text() 方法为 <text> 元素设置文本
    //     // 克隆文本为了添加白底和描边。使用 d3.selection 模块的 clone() 方法在所选元素之后插入所选元素的克隆，然后再用 lower() 方法将该插入的克隆移到父元素的顶部，作为第一个子元素（根据 svg 元素渲染顺序，作为「衬底」
    //     .clone(true)
    //     .lower()
    //     .attr("stroke-linejoin", "round")
    //     .attr("stroke-width", 3)
    //     .attr("stroke", "white");
    //   node
    //     .append("circle")
    //     .attr("fill", (d) => (d.children ? "#555" : "#999")) // 判断是否有子节点，如果有就用深色 #555，否则用浅色 #999
    //     .attr("r", 2.5);
    //   console.log(root.descendants());
    //   // 将创建的 <svg> 元素挂载到页面上
    //   // console.log(svg.node());
    //   d3.select("body").append(() => svg.node());
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