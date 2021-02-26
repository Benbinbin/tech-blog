(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1325:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基础语法"}},[t._v("基础语法")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass: Sass Basics"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.sass.hk/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass基础教程 Sass快速入门 Sass中文手册"),a("OutboundLink")],1),t._v(" | Sass中文网")])]),t._v(" "),a("h2",{attrs:{id:"注释"}},[t._v("注释")]),t._v(" "),a("p",[t._v("在 Sass 中使用符号 "),a("code",[t._v("// annotation")]),t._v(" 添加注释，而不需要像 CSS 中使用 "),a("code",[t._v("/* annotation */")]),t._v(" 麻烦地将注释包裹起来。")]),t._v(" "),a("h2",{attrs:{id:"变量"}},[t._v("变量")]),t._v(" "),a("p",[t._v("sass 让人们受益的一个重要特性支持变量，通过变量存储 常用的 CSS 属性值，如颜色、字体样式，然后通过变量名来引用它们，而无需重复书写且方便后续的维护。")]),t._v(" "),a("p",[t._v("使用符号 "),a("code",[t._v("$")]),t._v(" 声明变量，类似于 CSS 语法通过冒号来绑定值，如 "),a("code",[t._v("$highlight-color: #F90;")]),t._v("，支持绑定多个属性值并以空格分隔，如 "),a("code",[t._v("$basic-border: 1px solid black;")])]),t._v(" "),a("p",[t._v("💡 与 CSS 属性不同，变量一般定义在规则集之外（当变量定义在 CSS 规则块内，或任何 "),a("code",[t._v("{...}")]),t._v(" 形式的块中，那么该变量只能在此规则块内使用），而且常用单独的 "),a("code",[t._v("variables.scss")]),t._v(" 文档保存，并通过"),a("strong",[t._v("导入")]),t._v("文件的方式使用预设的变量。")]),t._v(" "),a("p",[t._v("只需要通过 "),a("code",[t._v("$variable-name")]),t._v(" 即可引用变量，编译后在生成的 CSS 文档中变量会被替换为相应的值。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highlight-color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #F90"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".selected ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highlight-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".selected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #F90"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("💡 变量可以复用，而需要修改样式时只对变量值进行修改，则所有引用该变量的元素样式值都会在编译后自动更新，十分便于维护\n💡 为变量命名一个合适的名称十分便于理解和使用\n💡 在声明变量时，变量值也可以引用其他变量")]),t._v(" "),a("h3",{attrs:{id:"插值"}},[t._v("插值")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("#{$varName}")]),t._v(" 形式"),a("a",{attrs:{href:"https://sass-lang.com/documentation/interpolation",target:"_blank",rel:"noopener noreferrer"}},[t._v("将变量值插入到其他数据之中"),a("OutboundLink")],1),t._v("，以组合为新的数据，")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("corner-icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon-"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("#{$name}")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/icons/#{$name}.svg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("corner-icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon-mail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/icons/mail.svg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"嵌套-css-规则"}},[t._v("嵌套 CSS 规则")]),t._v(" "),a("p",[t._v("由于 CSS 不允许嵌套规则集，而 HTML 元素却是嵌套式树结构的，因此针对页面一个区域进行样式设置时，往往需要"),a("strong",[t._v("同时为容器元素及其子元素")]),t._v("编写特定样式，则需要分别使用不同的选择器一条条列出规则集。")]),t._v(" "),a("p",[t._v("Sass 则支持像俄罗斯套娃那样在规则块中嵌套规则块为子元素设置样式，这种能力可避免重复书写选择器并提高了可读性（编译器则自动把这些嵌套规则分离，并填补父类选择器，构建为一条条 CSS 规则集）。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#content ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("aside ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #EEE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#content article h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#content article p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#content aside")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #EEE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一般情况下 Sass 编译器在解开一个嵌套规则时就会把父选择器，如 "),a("code",[t._v("#content")]),t._v("，通过一个空格连接到子选择器的前边，如 "),a("code",[t._v("article")]),t._v("和 "),a("code",[t._v("aside")]),t._v(" 形成 "),a("code",[t._v("#content article")]),t._v(" 和 "),a("code",[t._v("#content aside")])]),t._v(" "),a("p",[t._v("⚠️ 虽然 Sass 支持规则集嵌套，但是应该避免滥用该特性，最多只应该使用二层嵌套，否则过多的深层嵌套会使代码难以维护。")]),t._v(" "),a("h3",{attrs:{id:"父类选择器标识符"}},[t._v("父类选择器标识符")]),t._v(" "),a("p",[t._v("当嵌套的样式是为了结合"),a("strong",[t._v("伪类选择器")]),t._v("为当前元素添（而非为嵌套的子元素）加特定状态的样式时，则需要使用 Sass 特有的父类选择器 "),a("code",[t._v("&")])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article a ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":hover ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#content aside")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article a:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"组合选择器"}},[t._v("组合选择器")]),t._v(" "),a("p",[t._v("在设置嵌套样式时，默认使用后代选择器，当也支持使用组合选择器匹配其他层级的对象：")]),t._v(" "),a("ul",[a("li",[t._v("使用符号 "),a("code",[t._v(">")]),t._v(" 创建子类选择器：匹配一个直接子元素")]),t._v(" "),a("li",[t._v("使用符号 "),a("code",[t._v("+")]),t._v(" 或 "),a("code",[t._v("~")]),t._v(" 创建同级选择器：匹配下一个相邻的同级元素或以下所有同级元素")])]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("~ article ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dashed #ccc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("> section ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("dl > ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("dt ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("dd ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #555 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("nav + "),a("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article ~ article")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dashed #ccc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article > footer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article dl > dt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("article dl > dd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #555 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("nav + article")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"mixin-混合器"}},[t._v("Mixin 混合器")]),t._v(" "),a("p",[t._v("除了使用变量来复用一个数据值，Sass 支持复用样式集合，使用 "),a("code",[t._v("@mixin")]),t._v(" 标识符并定义自定义 "),a("em",[t._v("snippets")]),t._v(" 代码片段，也称为混合器，并在其后添加一个名称，代码片段则包含在 "),a("code",[t._v("{}")]),t._v(" 内。")]),t._v(" "),a("p",[t._v("可以在你的样式表中通过关键字 "),a("code",[t._v("@include")]),t._v(" 并结合相应的名称来引用这个混合器。")]),t._v(" "),a("p",[t._v("💡 Mixin 看上去很像其他的 CSS "),a("code",[t._v("@")]),t._v(" 标识符，如 "),a("code",[t._v("@media")]),t._v(" 或者 "),a("code",[t._v("@font-face")]),t._v("，也是定义有特殊功能的一个代码片段\n💡 Mixin 中可以不编写任何代码，🎦 "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=EKvzabk35cU",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过 "),a("code",[t._v("@content")]),t._v(" 标识符进行占位"),a("OutboundLink")],1),t._v("，在使用时再进行样式设置（视频示例中结合媒体查询使用）\n💡 一般将 Mixin 代码片段单独存储在一个 "),a("code",[t._v("mixin.scss")]),t._v(" 文档中，并通过导入的方式引用到其他样式表中\n⚠️ 大量的重用可能会导致生成的样式表过大，导致加载缓慢。应该合理地构造成优良的混合器，一条经验法则就是能否为这个混合器想出一个好的名字，而且使用语义化的名称亦可以避免重复使用混合器。")]),t._v(" "),a("h3",{attrs:{id:"给混合器传参"}},[t._v("给混合器传参")]),t._v(" "),a("p",[t._v("混合器并不一定总得生成相同的样式。可以在定义 "),a("code",[t._v("@mixin name($parameter)")]),t._v(" 添加形参，并在调用时 "),a("code",[t._v("@include name(argument)")]),t._v(" 传递实参以实现更精确的样式，这个功能和 JS 的函数类似。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义混合器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link-colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":hover ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":visited ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link-colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("🔨 编译后")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:visited")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"导入文件"}},[t._v("导入文件")]),t._v(" "),a("p",[t._v("类似于 CSS 的 "),a("code",[t._v("@import")]),t._v(" 规则，Sass 也允许使用 "),a("code",[t._v("@import")]),t._v(" 规则将其他样式表或 "),a("code",[t._v(".scss")]),t._v(" 文档引入当当前文档中，但不同的是 CSS 文件中导入的其他 CSS 文件只有执行到 "),a("code",[t._v("@import")]),t._v(" 时浏览器才会去下载导入相应的文件，这导致页面加载起来特别慢；而 Sass 在编译生成 "),a("code",[t._v(".css")]),t._v(" 文件时就把相关文件导入，即所有相关的样式代码被归纳复制到了同一个 "),a("code",[t._v(".css")]),t._v(" 文件中，而无需发起额外的下载请求。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入名为 mixins 后缀为 .scss 文档里的代码到当前文件中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mixins"')]),t._v("\n")])])]),a("p",[t._v("💡 使用 "),a("code",[t._v('@import "file-name"')]),t._v(" 规则导入文件时并不需要指明后缀，编译器会自动寻找匹配后缀合适的文档")]),t._v(" "),a("h2",{attrs:{id:"数值运算"}},[t._v("数值运算")]),t._v(" "),a("p",[t._v("Sass 支持数值运输，如 "),a("code",[t._v("+")]),t._v("、"),a("code",[t._v("-")]),t._v("、"),a("code",[t._v("*")]),t._v("、"),a("code",[t._v("/")]),t._v(" 等，一般放置在括号中其运算结果就作为属性值。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100% "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"内建模块"}},[t._v("内建模块")]),t._v(" "),a("p",[t._v("Sass 提供了许多"),a("a",{attrs:{href:"https://sass-lang.com/documentation/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置模块"),a("OutboundLink")],1),t._v("，包含一些预设的功能（类似于函数一样）或 mixin，以供开发者直接调用。")]),t._v(" "),a("p",[t._v("常用的颜色函数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lighten($color, $amount)")]),t._v(" 基于参数 "),a("code",[t._v("$amount")]),t._v("（范围从 0% - 100%）和颜色 "),a("code",[t._v("$color")]),t._v(" 计算出一个更浅的颜色")]),t._v(" "),a("li",[a("code",[t._v("complement($color)")]),t._v(" 计算出颜色 "),a("code",[t._v("$color")]),t._v(" 的互补色")])])])}),[],!1,null,null,null);s.default=e.exports}}]);