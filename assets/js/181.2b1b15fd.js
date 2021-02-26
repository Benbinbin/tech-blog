(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1155:function(t,a,e){"use strict";e.r(a);var n=e(18),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数组模块"}},[t._v("数组模块")]),t._v(" "),e("p",[t._v("可视化或分析数据通常由一个数组来表示，JavaScript 原生支持多种数组操作方法")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("修改数组自身的方法")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("array.push(value)")]),t._v(" - 追加一个或多个元素")]),t._v(" "),e("li",[e("code",[t._v("array.unshift(value)")]),t._v(" - 在数组前添加一个或多个元素")]),t._v(" "),e("li",[e("code",[t._v("array.pop()")]),t._v(" - 移除最后一个元素")]),t._v(" "),e("li",[e("code",[t._v("array.shift()")]),t._v(" - 移除第一个元素")]),t._v(" "),e("li",[e("code",[t._v("array.reverse()")]),t._v(" - 数组元素顺序翻转")]),t._v(" "),e("li",[e("code",[t._v("array.sort([compareFunction])")]),t._v(" - 排序")]),t._v(" "),e("li",[e("code",[t._v("array.splice(start, [deleteCount], [item1, item2, ...])")]),t._v(" - 添加或者移除")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("数组的存取方法")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("array.concat(arg1, arg2...)")]),t._v(" - 将数组与数组或值合并")]),t._v(" "),e("li",[e("code",[t._v("array.join([glue])")]),t._v(" - 用指定的分隔符将数组元素连接起来转为一个字符串")]),t._v(" "),e("li",[e("code",[t._v("array.slice(begin, [end])")]),t._v(" - 提取切片")]),t._v(" "),e("li",[e("code",[t._v("array.indexOf(item, [from])")]),t._v(" - 找出指定元素的索引")]),t._v(" "),e("li",[e("code",[t._v("array.lastIndexOf(item, [from])")]),t._v(" - 找出指定元素的最后一个索引")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("数组的迭代方法")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("array.filter(function(item, index, array))")]),t._v(" - 过滤匹配数组中所有符合条件的元素")]),t._v(" "),e("li",[e("code",[t._v("array.forEach(function(item, [index], [array]), [thisArg])")]),t._v(" - 对每个元素执行某个方法")]),t._v(" "),e("li",[e("code",[t._v("array.every(function(item, index))")]),t._v(" - 是否每个元素都符合给定的条件")]),t._v(" "),e("li",[e("code",[t._v("array.map(function(item, index, array))")]),t._v(" - 根据指定的操作对每个元素执行后返回一个新的数组")]),t._v(" "),e("li",[e("code",[t._v("array.some(function(item, index))")]),t._v(" - 是否存在符合某个条件的元素")]),t._v(" "),e("li",[e("code",[t._v("array.reduce(function(accumulator, item, index, array), [initial])")]),t._v(" - 从左到右执行 reduce 操作并返回一个值")]),t._v(" "),e("li",[e("code",[t._v("array.reduceRight(function(accumulator, item, index, array), [initial])")]),t._v(" - 从右到左执行 reduce 操作并返回一个值")])])])]),t._v(" "),e("h2",{attrs:{id:"基本统计方法"}},[t._v("基本统计方法")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("d3.min(iterable[, accessor])")]),t._v(" 对指定的可迭代对象 "),e("code",[t._v("iterable")]),t._v(" 进行自然排序并返回最小值，如果可迭代对象为空则返回 "),e("code",[t._v("undefined")]),t._v("。可选的参数 "),e("code",[t._v("accessor")]),t._v(" 是一个函数，可以用来自定义如何访问数组中的元素，对于元素是对象时，可以返回其中某个属性的值作为排序的目标。\n💡 与 JavaScript 内置的 "),e("a",{attrs:{href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min",target:"_blank",rel:"noopener noreferrer"}},[t._v("Math.min(value1, value2, ...)"),e("OutboundLink")],1),t._v(" 不同，这个方法可以忽略 "),e("code",[t._v("undefined")]),t._v("、"),e("code",[t._v("null")]),t._v(" 和 "),e("code",[t._v("NaN")]),t._v(" 等特殊值，在可视化分析时忽略缺失数据是很有用的")])]),t._v(" "),e("p",[t._v("⚠️ 对比是以自然排序进行的而非隐式转换为数值再对比，如对字符串 "),e("code",[t._v("['20', '3']")]),t._v(" 进行 "),e("code",[t._v("d3.min")]),t._v(" 操作返回 "),e("code",[t._v("20")]),t._v(", 而对数值 "),e("code",[t._v("[20, 3]")]),t._v(" 进行 "),e("code",[t._v("d3.min")]),t._v(" 操作则返回 "),e("code",[t._v("3")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("d3.max(iterable[, accessor])")]),t._v(" 返回最大值")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.extent(iterable[, accessor])")]),t._v(" 使用自然排序返回指定的可迭代对象的最小值和最大值，如果可迭代对象为空则返回 "),e("code",[t._v("[undefined, undefined]")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.sum(iterable[, accessor])")]),t._v(" 对指定的数值型的可迭代对象计算其元素的和，如果数组为空或非数值则返回 "),e("code",[t._v("0")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.mean(iterable[, accessor])")]),t._v(" 返回平均值")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.median(iterable[, accessor])")]),t._v(" 对指定的数值型的可迭代对象使用 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("R-7 方法"),e("OutboundLink")],1),t._v(" 返回数组的中位数")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.quantile(iterable, p[, accessor])")]),t._v(" 返回指定的数值型的可迭代对象的 p-分位数，"),e("code",[t._v("p")]),t._v(" 是 "),e("code",[t._v("[0, 1]")]),t._v(" 之间的小数，如 "),e("code",[t._v("p = 0.25")]),t._v(" 计算第一个四分位数，"),e("code",[t._v("p = 0.75")]),t._v(" 表示第三个四分位数，这个方法也使用 "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population",target:"_blank",rel:"noopener noreferrer"}},[t._v("R-7 方法"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 20")]),t._v("\nd3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quantile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.variance(iterable[, accessor])")]),t._v(" 返回指定的数值型的可迭代对象的 "),e("a",{attrs:{href:"http://mathworld.wolfram.com/SampleVariance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("无偏估计方差 unbiased estimator of the population variance"),e("OutboundLink")],1),t._v("，如果数组中包含的元素个数小于 2 则返回 "),e("code",[t._v("undefined")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("d3.deviation(iterable[, accessor])")]),t._v(" 返回指定的数值型的可迭代对象的标准差\n💡 标准差定义为 "),e("a",{attrs:{href:"https://d3js.org.cn/document/d3-array/#variance",target:"_blank",rel:"noopener noreferrer"}},[t._v("方差bias-corrected variance()"),e("OutboundLink")],1),t._v(" 的平方根")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);