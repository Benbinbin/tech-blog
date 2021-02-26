(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1165:function(t,a,e){"use strict";e.r(a);var s=e(18),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"简介"}},[t._v("简介")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://d3js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("D3"),e("OutboundLink")],1),t._v("，Data-Driven Documents 或 D3.js 是一个基于数据来操作 DOM 的 JavaScript 库，它可以将几乎任意数据绑定到 Document Object Model，DOM 文档对象模型上，然后根据数据来计算对应 DOM 的属性值，以「驱动」DOM 变化。")]),t._v(" "),e("p",[t._v("D3 不是一个框架因此也没有操作上的限制，它遵循现有的 Web 标准可以灵活地帮助你使用 HTML、CSS、SVG 以及 Canvas 来展示数据。D3 的运行速度很快，支持大数据集和动态交互以及动画。它提供大量的可视化组件（来自"),e("a",{attrs:{href:"https://github.com/d3/d3/blob/master/API.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方"),e("OutboundLink")],1),t._v("和"),e("a",{attrs:{href:"https://www.npmjs.com/browse/keyword/d3-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("社区开发者"),e("OutboundLink")],1),t._v("）来驱动 DOM 操作。")]),t._v(" "),e("p",[t._v("💡 D3 5+ 版本支持现代浏览器，而 D3 4 版本可以支持 IE 9+，更旧版本的 D3 可以支持更旧的浏览器。")]),t._v(" "),e("p",[t._v("💡 D3 也可以在 Node 和 web workers 环境中运行。但在 Node 环境中需要提供自己创建的 DOM，推荐使用 "),e("a",{attrs:{href:"https://github.com/jsdom/jsdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDOM"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"d3-不是一种新的表示方法"}},[t._v("D3 不是一种新的表示方法")]),t._v(" "),e("p",[t._v("D3 不引入新的视觉表示方法，而是借助于现有的 Web 标准，包括 HTML、CSS、SVG 等，如使用 D3 创建 "),e("code",[t._v("svg")]),t._v(" 元素，这样就可以与标准的 Web API 进行无缝结合，使用外部样式表进行样式化，也可以使用复合过滤器效果、虚线和裁剪等功能，而且可以使用浏览器内置调试工具来进行调试，在浏览器提供新的技术或 Web API 时，可以直接升级对接使用而无需要等待 D3 版本升级来适配。")]),t._v(" "),e("h2",{attrs:{id:"下载安装"}},[t._v("下载安装")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在"),e("a",{attrs:{href:"https://d3js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("下载"),e("a",{attrs:{href:"https://github.com/d3/d3/releases/download/v6.2.0/d3.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),e("OutboundLink")],1),t._v("（当前最新版本为 "),e("code",[t._v("v6.2.0")]),t._v("），再在项目中引入本地 JavaScript 文件。")])]),t._v(" "),e("li",[e("p",[t._v("通过包管理工具，以模块形式引入项目")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for npm")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" d3 --save\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" d3 --save\n")])])])]),t._v(" "),e("li",[e("p",[t._v("通过官网提供的 CDN 引入，也可以使用  "),e("a",{attrs:{href:"https://cdnjs.com/libraries/d3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDNJS"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://unpkg.com/d3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg"),e("OutboundLink")],1),t._v(" 提供 CDN")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://d3js.org/d3.v5.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- minified version --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://d3js.org/d3.v5.min.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("可以单独使用 "),e("code",[t._v("d3")]),t._v(" 中的某个模块, 比如单独使用 "),e("a",{attrs:{href:"https://github.com/d3/d3-selection",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("d3-selection")]),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("使用 CDN 导入")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\x3c!-- 使用 CDN 导入 --\x3e\n<script src="https://d3js.org/d3-selection.v1.js"><\/script>\n')])])]),e("ul",[e("li",[t._v("基于 "),e("code",[t._v("webpack")]),t._v(" 或其他打包工具进行构建时")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// 在项目中载入 D3 部分模块\nimport {scaleLinear} from "d3-scale";\n\n// 或者导入 d3 的全部功能并且设置命名空间\nimport * as d3 from "d3";\n')])])]),e("ul",[e("li",[t._v("在 Nodejs 环境中")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var d3 = require("d3");\n')])])]),e("p",[t._v("也可以导入多个模块然后将这些模块集合到 "),e("code",[t._v("d3")]),t._v(" 对象中, 此时使用 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Object.assign")]),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var d3 = Object.assign({},\n    require("d3-format"),\n    require("d3-geo"),\n    require("d3-geo-projection"));\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);