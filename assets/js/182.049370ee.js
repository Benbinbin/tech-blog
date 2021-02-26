(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1157:function(t,n,s){"use strict";s.r(n);var a=s(18),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"获取数据模块"}},[t._v("获取数据模块")]),t._v(" "),s("p",[t._v("Fetch 模块基于 "),s("code",[t._v("fetch")]),t._v(" 方法添加了解析功能，内部支持 "),s("a",{attrs:{href:"https://d3js.org.cn/document/d3-fetch/#json",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://d3js.org.cn/document/d3-fetch/#csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSV"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://d3js.org.cn/document/d3-fetch/#tsv",target:"_blank",rel:"noopener noreferrer"}},[t._v("TSV"),s("OutboundLink")],1),t._v(" 格式的数据获取与解析，也可以直接对文本使用其他形式的解析，这个方法替换了 "),s("a",{attrs:{href:"https://github.com/d3/d3-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3-request"),s("OutboundLink")],1),t._v(" 模块。该模块大部分方法都可以传递 URL 或本地数据文件所在的路径。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("d3.dsv(delimiter, input[, init][, row])")]),t._v(" 从指定的 "),s("code",[t._v("input")]),t._v(" URL 获取 DSV 文件，"),s("code",[t._v("delimiter")]),t._v(" 指定数据的分隔符，可选的 "),s("code",[t._v("row")]),t._v(" 转换函数可以被用来将行对象转换为更具体的形式。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("d3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    year"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// convert "Year" column to Date')]),t._v("\n    make"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// convert "Length" column to number')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("d3.csv(input[, init][, row])")]),t._v(" 等价于以逗号作为分隔符的 "),s("code",[t._v('d3.dsv(",", "/path/to/file.csv")')]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("d3.tsv(input[, init][, row])")]),t._v("等价于以 tab 字符作为分隔符的 "),s("code",[t._v('d3.dsv("\\t", "/path/to/file.tsv")')]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("d3.json(input[, init])")]),t._v(" 从指定的 "),s("code",[t._v("input")]),t._v(" URL 获取 JSON 格式的文件。如果指定了 "),s("code",[t._v("init")]),t._v(" 则会将其传递给底层的 "),s("a",{attrs:{href:"https://fetch.spec.whatwg.org/#fetch-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch"),s("OutboundLink")],1),t._v(" 方法，参考 "),s("a",{attrs:{href:"https://fetch.spec.whatwg.org/#requestinit",target:"_blank",rel:"noopener noreferrer"}},[t._v("RequestInit"),s("OutboundLink")],1),t._v(" 了解允许的字段。")]),t._v(" "),s("li",[s("code",[t._v("d3.text(input[, init])")]),t._v(" 从指定的 "),s("code",[t._v("input")]),t._v(" URL 获取 text 文件。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);