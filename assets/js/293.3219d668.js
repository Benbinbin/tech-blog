(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1379:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom-变动观察器"}},[t._v("DOM 变动观察器")]),t._v(" "),s("p",[t._v("DOM 变动观察器用于观察页面的 DOM 变化情况，如特性，添加/删除的元素，文本内容，并在其发生更改时触发回调。我们可以用它来跟踪代码其他部分引入的更改，以及与第三方脚本集成。")]),t._v(" "),s("p",[t._v("观察器使用内建对象（构造函数） "),s("code",[t._v("MutationObserver")]),t._v(" 创建，并通过方法 "),s("code",[t._v("observe")]),t._v(" 设置需要观察的 DOM 节点")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个带有回调函数的观察器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MutationObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置需要观察的 DOM 节点")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参数说明")]),t._v(" "),s("p",[s("code",[t._v("config")]),t._v(" 是一个具有多种属性的对象，这些属性的值都是布尔值，用于限定要观察的内容，避免不必要的回调调用以节省资源。")]),t._v(" "),s("ul",[s("li",[t._v("属性 "),s("code",[t._v("childList")]),t._v(" 设置是否观察 "),s("code",[t._v("node")]),t._v(" 的直接子节点的更改")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("subtree")]),t._v(" 设置是否观察  "),s("code",[t._v("node")]),t._v(" 的所有后代的更改")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("attributes")]),t._v(" 设置是否观察  "),s("code",[t._v("node")]),t._v(" 的特性（attribute）")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("attributeFilter")]),t._v(" 特性名称数组，设置只观察这些选定的特性的更改")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("characterData")]),t._v(" 设置是否观察 "),s("code",[t._v("node.data")]),t._v("（文本内容）的更改")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("attributeOldValue")]),t._v(" 设置是否将特性的旧值和新值都"),s("strong",[t._v("传递给回调函数")]),t._v("，如果为 "),s("code",[t._v("false")]),t._v(" 只传新值（需要同时设置选项 "),s("code",[t._v("attributes=true")]),t._v("）")]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("characterDataOldValue")]),t._v(" 设置是否将 "),s("code",[t._v("node.data")]),t._v(" 的旧值和新值都"),s("strong",[t._v("传递给回调函数")]),t._v("，如果为 "),s("code",[t._v("false")]),t._v(" 只传新值（需要同时设置选项 "),s("code",[t._v("characterData=true")]),t._v("）")])]),t._v(" "),s("p",[t._v("💡 当设置了相应的属性后，DOM 发生任何更改都会作为第一个参数传递给回调函数，这些改动组成一系列被称为 "),s("a",{attrs:{href:"https://dom.spec.whatwg.org/#mutationrecord",target:"_blank",rel:"noopener noreferrer"}},[t._v("MutationRecord"),s("OutboundLink")],1),t._v(" 的对象，具有多种属性")]),t._v(" "),s("ul",[s("li",[t._v("属性 "),s("code",[t._v("type")]),t._v(" 变动类型，以下类型之一：\n"),s("ul",[s("li",[s("code",[t._v('"attributes"')]),t._v(" 特性被修改了")]),t._v(" "),s("li",[s("code",[t._v('"characterData"')]),t._v(" 数据被修改了，用于文本节点")]),t._v(" "),s("li",[s("code",[t._v('"childList"')]),t._v(" 添加/删除了子元素")])])]),t._v(" "),s("li",[t._v("属性 "),s("code",[t._v("target")]),t._v(" 更改发生在何处，即 "),s("code",[t._v('"attributes"')]),t._v(" 所在的元素，或 "),s("code",[t._v('"characterData"')]),t._v(" 所在的文本节点，或 "),s("code",[t._v('"childList"')]),t._v(" 变动所在的元素")]),t._v(" "),s("li",[s("code",[t._v("addedNodes/removedNodes")]),t._v(" 添加/删除的节点")]),t._v(" "),s("li",[s("code",[t._v("previousSibling/nextSibling")]),t._v(" 添加/删除的节点的上一个/下一个兄弟节点")]),t._v(" "),s("li",[s("code",[t._v("attributeName/attributeNamespace")]),t._v(" 被更改的特性的名称/命名空间（用于 XML）")]),t._v(" "),s("li",[s("code",[t._v("oldValue")]),t._v(" 之前的值，仅适用于特性或文本更改，而且设置了相应选项 "),s("code",[t._v("attributeOldValue")]),t._v("/"),s("code",[t._v("characterDataOldValue")]),t._v(" 为 "),s("code",[t._v("true")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 元素 div 具有特性 contentEditable，该特性使我们可以聚焦和编辑元素 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("contentEditable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click and "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("edit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(", please"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为 div 元素设置 DOM 变动观察器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MutationObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutationRecords")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutationRecords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(the changes)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 限定要观察的内容，除了特性之外的所有变动")]),t._v("\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  childList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察直接子节点")]),t._v("\n  subtree"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 及其更低的后代节点")]),t._v("\n  characterDataOldValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将旧的数据传递给回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果聚焦到给定的 "),s("code",[t._v("<div>")]),t._v(" 上然后更改 "),s("code",[t._v("<b>edit</b>")]),t._v(" 中的文本，控制台会输出 MutationRecord 对象，显示 DOM 修改的相关信息")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mutationRecords "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"characterData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  oldValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edit"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("text node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他属性为空")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("💡 使用方法 "),s("code",[t._v("observer.disconnect()")]),t._v(" 可以停止观察。当我们停止观察时，观察器可能尚未处理某些更改，可以调用方法 "),s("code",[t._v("observer.takeRecords()")]),t._v(" 获取尚未处理的变动记录列表，表中记录的是已经发生，但回调暂未处理的变动。")]),t._v(" "),s("p",[t._v("⚠️ 观察器在内部对节点使用弱引用，观察到 DOM 节点这一事实并不能阻止垃圾回收，即如果一个节点被从 DOM 中删除了，并且该节点变得不可访问，那么它就会被垃圾回收。")])])}),[],!1,null,null,null);a.default=n.exports}}]);