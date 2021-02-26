(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1073:function(t,a,e){t.exports=e.p+"assets/pdf/JavaScript-RegExp-mini-book-v1.1.pdf"},1427:function(t,a,e){"use strict";e.r(a);var s=e(18),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正则表达式"}},[t._v("正则表达式")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式 - JavaScript | MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExp - JavaScript | MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5965943ff265da6c30653879",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS正则表达式完整教程（略长）"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:e(1073)}},[t._v("pdf")])])]),t._v(" "),s("p",[t._v("正则表达式是使用普通字符或普通字符与特殊字符组成的文字模式，该模式用于查找匹配字符串中字符组合。在 JavaScript中，正则表达式也是对象。")]),t._v(" "),s("h2",{attrs:{id:"创建正则表达式"}},[t._v("创建正则表达式")]),t._v(" "),s("p",[s("strong",[t._v("方法一：正则表达式字面量")])]),t._v(" "),s("p",[t._v("使用一个正则表达式字面量创建正则表达式，其由包含在斜杠 "),s("code",[t._v("//")]),t._v(" 之间的模式组成。该形式构建的正则表达式在脚本加载时编译，当正则表达式保持不变时，使用此方法可获得更好的性能。")]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("方法二：构造函数 "),s("code",[t._v("RegExp()")])])]),t._v(" "),s("p",[t._v("调用 RegExp 对象的构造函数 "),s("code",[t._v("RegExp()")]),t._v(" 创建正则表达式。以字符串形式（使用双引号 "),s("code",[t._v('""')]),t._v(" 输入）。该形式构建的正则表达式在脚本运行时编译，当你知道正则表达式的模式将会改变，或者你不知道模式，并且从其他来源获取它，如用户输入，可使用该方法。")]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("car re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab+c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意")]),t._v("：当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 "),s("code",[t._v("\\")]),t._v("）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下是等价正则表达式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\w+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\w+")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"基本语法"}},[t._v("基本语法")]),t._v(" "),s("p",[t._v("一个正则表达式模式是由简单的字符或者是简单和特殊字符的组合。")]),t._v(" "),s("p",[s("strong",[t._v("简单模式")]),t._v("是由想直接找到的字符构成，如 "),s("code",[t._v("/abc/")]),t._v(" 这个模式就能且仅能匹配 "),s("code",[t._v("abc")]),t._v(" 字符"),s("strong",[t._v("按照顺序同时出现")]),t._v("的情况。当你需要搜索一个比直接匹配需要更多条件的匹配时，可以在模式中使用特殊字符。")]),t._v(" "),s("p",[s("strong",[t._v("常见的特殊符号")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("特殊字符")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("\\")])]),t._v(" "),s("td",[t._v("转义符")]),t._v(" "),s("td",[t._v("在非特殊字符之前表示下一个字符是特殊字符，不能按照字面理（相反在特殊字符之前表示下一个字符不是特殊字符，应该按照字面理解）。"),s("strong",[t._v("如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^")])]),t._v(" "),s("td",[t._v("匹配输入的"),s("strong",[t._v("开始")])]),t._v(" "),s("td",[s("code",[t._v("/^A/")]),t._v(" 不会匹配 "),s("code",[t._v("an A")]),t._v(" 中的 "),s("code",[t._v("A")]),t._v("，匹配 "),s("code",[t._v("An E")]),t._v(" 中的 "),s("code",[t._v("A")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$")])]),t._v(" "),s("td",[t._v("匹配输入的"),s("strong",[t._v("结束")])]),t._v(" "),s("td",[s("code",[t._v("/t$/")]),t._v(" 不会匹配 "),s("code",[t._v("eater")]),t._v(" 中的 "),s("code",[t._v("t")]),t._v("，匹配 "),s("code",[t._v("eat")]),t._v(" 中的 "),s("code",[t._v("t")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\b")])]),t._v(" "),s("td",[t._v("匹配一个零宽"),s("strong",[t._v("单词边界")]),t._v(" zero-width word boundary，如一个字母与一个空格之间。")]),t._v(" "),s("td",[s("code",[t._v("/\\bno/")]),t._v(" 匹配 "),s("code",[t._v("at noon")]),t._v(" 中的 "),s("code",[t._v("no")]),t._v("，"),s("code",[t._v("/ly\\b/")]),t._v(" 匹配 "),s("code",[t._v("possibly yesterday.")]),t._v(" 中的 "),s("code",[t._v("ly")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("匹配前一个表达式 0 次或多次****。等价于 "),s("code",[t._v("{0,}")])]),t._v(" "),s("td",[s("code",[t._v("/bo*/")]),t._v(" 会匹配 "),s("code",[t._v("A ghost boooooed")]),t._v(" 中的 "),s("code",[t._v("booooo")]),t._v(" 和 "),s("code",[t._v("A bird warbled")]),t._v(" 中的 "),s("code",[t._v("b")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("+")])]),t._v(" "),s("td",[t._v("匹配前面一个表达式 "),s("strong",[t._v("1 次或者多次")]),t._v("。等价于 "),s("code",[t._v("{1,}")])]),t._v(" "),s("td",[s("code",[t._v("/a+/")]),t._v(" 会匹配 "),s("code",[t._v("candy")]),t._v(" 中的 "),s("code",[t._v("a")]),t._v(" 和 "),s("code",[t._v("caaaaaaandy")]),t._v(" 中所有的 "),s("code",[t._v("a")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("?")])]),t._v(" "),s("td",[t._v("匹配前面一个表达式 "),s("strong",[t._v("0 次或者 1 次")]),t._v("。等价于 {0,1}。")]),t._v(" "),s("td",[s("code",[t._v("/e?le?/")]),t._v(" 匹配 "),s("code",[t._v("angel")]),t._v(" 中的 "),s("code",[t._v("el")]),t._v("、"),s("code",[t._v("angle")]),t._v(" 中的 "),s("code",[t._v("le")]),t._v(" 以及 "),s("code",[t._v("oslo")]),t._v(" 中的 "),s("code",[t._v("l")]),t._v("。如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为"),s("strong",[t._v("非贪婪（匹配尽量少的字符）")]),t._v("，和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。"),s("code",[t._v("123abc")]),t._v(" 使用 "),s("code",[t._v("/\\d+/")]),t._v(" 将会匹配 "),s("code",[t._v("123")]),t._v("，而使用 "),s("code",[t._v("/\\d+?/")]),t._v(" 则只会匹配到 "),s("code",[t._v("1")]),t._v("。还用于"),s("strong",[t._v("先行断言中")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".")])]),t._v(" "),s("td",[t._v("（小数点）默认匹配除换行符之外的"),s("strong",[t._v("任何单个字符")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("常见的特殊字符")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("\\d")])]),t._v(" "),s("td",[t._v("匹配任意阿拉伯数字。等价于[0-9]。")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\w")])]),t._v(" "),s("td",[t._v("匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]。")]),t._v(" "),s("td",[s("code",[t._v("/\\w/")]),t._v(" 匹配 "),s("code",[t._v("apple")]),t._v(" 中的 "),s("code",[t._v("a")]),t._v("，"),s("code",[t._v("$5.28")]),t._v(" 中的 "),s("code",[t._v("5")]),t._v(" 和 "),s("code",[t._v("3D")]),t._v(" 中的 "),s("code",[t._v("3")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\s")])]),t._v(" "),s("td",[t._v("匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\t")])]),t._v(" "),s("td",[t._v("匹配一个水平制表符（tab）")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\r")])]),t._v(" "),s("td",[t._v("匹配一个回车符（carriage return）")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\n")])]),t._v(" "),s("td",[t._v("匹配一个换行符（linefeed）")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("常见字符集合")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符集")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("注释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[xyz]")])]),t._v(" "),s("td",[t._v("一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符 "),s("code",[t._v("-")]),t._v(" 指定一个范围。")]),t._v(" "),s("td",[s("code",[t._v("[abcd]")]),t._v(" 等价于 "),s("code",[t._v("[a-d]")]),t._v("，匹配 "),s("code",[t._v("brisket")]),t._v(" 中的 "),s("code",[t._v("b")]),t._v(" 和 "),s("code",[t._v("chop")]),t._v(" 中的 "),s("code",[t._v("c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[^xyz]")])]),t._v(" "),s("td",[t._v("一个反义或补充字符集，也叫反义字符组。也就是说，它匹配任意不在括号内的字符。")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"分组-grouping-与引用-references"}},[t._v("分组 Grouping 与引用 references")]),t._v(" "),s("h3",{attrs:{id:"分组"}},[t._v("分组")]),t._v(" "),s("p",[t._v("使用括号 "),s("code",[t._v("(regex)")]),t._v(" 表示分组，并且捕获 regex 匹配项，以供反向引用")]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(\\d{4})-(\\d{2})-(\\d{2})")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-06-12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法 replace 中第二个参数里用 $1、$2、$3 指代相应的分组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$2/$3/$1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "06/12/2017"')]),t._v("\n")])])]),s("h2",{attrs:{id:"断言-assertions"}},[t._v("断言 Assertions")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Assertions"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("一类特殊字符的组合，以表示满足某些条件的匹配模式。断言包含先行断言 look-ahead、后行断言 look-behind 和条件表达式 conditional expressions。")]),t._v(" "),s("h3",{attrs:{id:"先行断言"}},[t._v("先行断言")]),t._v(" "),s("p",[t._v("模式 "),s("code",[t._v("x(?=y)")])]),t._v(" "),s("p",[t._v("表示 "),s("code",[t._v("y")]),t._v(" 紧跟 "),s("code",[t._v("x")]),t._v(" 的情况下匹配 "),s("code",[t._v("x")]),t._v("（匹配结果不包括 "),s("code",[t._v("y")]),t._v(")")]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Jack 后跟有 Sprat 或 Frost 的情况下才会得到匹配。不过匹配结果不包括 Sprat 或 Frost")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Jack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sprat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Frost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),s("h3",{attrs:{id:"负向先行断言"}},[t._v("负向先行断言")]),t._v(" "),s("p",[t._v("模式 "),s("code",[t._v("x(?!y)")])]),t._v(" "),s("p",[t._v("表示 "),s("code",[t._v("x")]),t._v(" 后无 "),s("code",[t._v("y")]),t._v(" 紧随的情况下匹配 "),s("code",[t._v("x")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配一个后面没有小数点跟随的数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),s("h3",{attrs:{id:"后行断言"}},[t._v("后行断言")]),t._v(" "),s("p",[t._v("模式 "),s("code",[t._v("(?<=y)x")])]),t._v(" "),s("p",[t._v("表示 "),s("code",[t._v("x")]),t._v(" 紧随 "),s("code",[t._v("y")]),t._v(" 的情况下匹配 "),s("code",[t._v("x")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sprat 在紧随 Jack 或 Tom 的情况下才会得到匹配")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("Jack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Tom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("Sprat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),s("h3",{attrs:{id:"负向后行断言"}},[t._v("负向后行断言")]),t._v(" "),s("p",[t._v("模式 "),s("code",[t._v("(?<!y)x")])]),t._v(" "),s("p",[t._v("表示 "),s("code",[t._v("x")]),t._v(" 不紧随 "),s("code",[t._v("y")]),t._v(" 的情况下匹配 "),s("code",[t._v("x")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数字没有跟随在负值符号 - 后面才匹配")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),s("h2",{attrs:{id:"模式修饰符"}},[t._v("模式修饰符")]),t._v(" "),s("p",[t._v("模式修饰符用于控制匹配的相关方式，放置在正则表达式最后一个 "),s("code",[t._v("/")]),t._v(" 外侧")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("i")]),t._v(" ignoreCase 忽略大小写")]),t._v(" "),s("li",[s("code",[t._v("g")]),t._v(" global 全局匹配")]),t._v(" "),s("li",[s("code",[t._v("m")]),t._v(" multiline 多行匹配")])])])}),[],!1,null,null,null);a.default=v.exports}}]);