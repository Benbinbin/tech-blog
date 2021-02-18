---
tags:
  - javascript
---

# 日期
日期 `Data` 是一个新的内建对象，通过该对象可以方便地获取日期，该对象还由很多方法以方便地修改时间或测量时间。

## 创建
使用构造函数 `Date()` 创建 `Date` 对象

* `new Date()` 不带参数创建一个表示当前日期和时间的 `Date` 对象
* `new Date(milliseconds)` 传入整数参数代表的是自 1970-01-01 00:00:00 以来经过的毫秒数，根据这个时间间隔创建一个相应的 `Date` 对象。该整数被称为 **时间戳**，带有负的时间戳；若参数为 `0` 表示创建一个 Date 对象，其时间等于 1970-01-01 00:00:00 UTC+0 再过一毫秒（1/1000 秒）。
*  `new Date(dataString)` 传递字符串会被自动解析，并创建一个相应时间、日期的 `Date` 对象。字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`，其中：

    - `YYYY-MM-DD` —— 日期：年-月-日。
    - 字符 `"T"` 是一个分隔符。
    - `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒。
    - 可选字符 `'Z'` 为 `+-hh:mm` 格式的时区。单个字符 `Z` 代表 UTC+0 时区。

* `new Date(year, month, date, hours, minutes, seconds, ms)` 可以传递多个整数参数，以使用当前时区创建相应的 `Date` 对象，只有前两个参数是必须的：

    - `year` 必须是四位数：`2013` 是合法的，`98` 是不合法的。
    - `month` 计数从 `0`（一月）开始，到 `11`（十二月）结束。
    - `date` 是当月的具体某一天，如果缺失，则为默认值 `1`。
    - 如果 `hours/minutes/seconds/ms` 缺失，则均为默认值 `0`。

```js
let now = new Date();
alert( now ); // 显示当前的日期/时间

// 0 表示 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// 现在增加 24 小时，得到 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// 允许使用负时间戳
let Dec31_1969 = new Date(-24 * 3600 * 1000);   // 01.01.1970 UTC+0 的前一天 31 Dec 1969
alert( Dec31_1969 );

// 传递字符串
let date = new Date("2017-01-26");
alert(date);   // Thu Jan 26 2017 08:00:00 GMT+0800 (中国标准时间)

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // 同样，时分秒等均为默认值 0
```

:bulb: 在 JavaScript 中，日期和时间使用 `Date` 对象来表示。我们不能只创建日期，或者只创建时间，`Date` 对象总是同时创建两者。

:bulb: `Date` 对象的时间度量最小精确到 1 毫秒（1/1000 秒）。需要更加精准的时间度量可以依赖其他系统，如浏览器的函数 [performance.now()](https://developer.mozilla.org/zh/docs/Web/API/Performance/now) 给出从页面加载开始的以毫秒为单位的微秒数（精确到毫秒的小数点后三位）。Node.js 有 `microtime` 模块以及其他方法。从技术上讲，几乎所有的设备和环境都允许获取更高精度的数值，只是不是通过 `Date` 对象。

## 从字符串读取日期时间
函数 `Date.parse(str)` 会解析给定格式的字符串，并返回时间戳（自 1970-01-01 00:00:00 起所经过的毫秒数）。字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`，简短形式也是可以的，比如 `YYYY-MM-DD` 或 `YYYY-MM`，甚至可以是 `YYYY`。`Date.parse(str)` 如果给定字符串的格式不正确，则返回 `NaN`。

- `YYYY-MM-DD` —— 日期：年-月-日。
- 字符 `"T"` 是一个分隔符。
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒。
- 可选字符 `'Z'` 为 `+-hh:mm` 格式的时区。单个字符 `Z` 代表 UTC+0 时区。

```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (时间戳)

let date = new Date(ms); // 通过时间戳来立即创建一个 Date 对象
```

## 访问日期组件
通过 `Date` 对象的方法可以访问/解析对象的年、月等信息

* 方法 `.getFullYear()` 获取年份（4 位数）
    :warning: 不是 `getYear()`，而是 `getFullYear()` 很多 JavaScript 引擎都实现了一个非标准化的方法 `getYear()`，不推荐使用这个方法。
* 方法 `.getMonth()` 获取月份，从 0 到 11。
* 方法 `.getDate()` 获取当月的具体日期，从 1 到 31。
* 方法 `.getHours()`、`getMinutes()`、`getSeconds()`、`getMilliseconds()` 获取相应的时间组件。
* 方法 `.getDay()` 获取一周中的第几天，从 0（星期日）到 6（星期六）。
* 方法 `.getTime()` 返回日期的时间戳（单位为毫秒 `ms`），即从 1970-1-1 00:00:00 UTC+0 开始到对象 `Date` 表示的时间所经过的毫秒数。
* 方法 `.getTimezoneOffset()` 返回 UTC 与本地时区之间的时差，以分钟为单位

:bulb: 以上的所有方法返回的组件都是基于当地时区的，只需要在方法名称的 `get` 之后插入关键字 `UTC` 即可返回基于 UTC+0 时区的数据，如 `.getUTCFullYear()`、`.getUTCMonth()`、`.getUTCDay()`

```js
//  当前日期
let date = new Date();

// 当地时区的小时数
alert( date.getHours() );

// 在 UTC+0 时区的小时数（非夏令时的伦敦时间）
alert( date.getUTCHours() );

// 如果你在时区 UTC-1，输出 60
// 如果你在时区 UTC+3，输出 -180
alert( new Date().getTimezoneOffset() );   // -480，北京时区
```

## 修改日期组件
下列方法可以设置日期/时间组件：

- [`setFullYear(year, [month], [date])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)
- [`setMonth(month, [date])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [`setDate(date)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [`setHours(hour, [min], [sec], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [`setMinutes(min, [sec], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [`setSeconds(sec, [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [`setMilliseconds(ms)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [`setTime(milliseconds)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)（使用自 1970-01-01 00:00:00 UTC+0 以来的毫秒数来设置整个日期）

:bulb: 以上方法对 `Date` 对象的设置都是基于当地时区的，除了 `setTime()` 还可以有 UTC 变体的方法，基于 UTC+0 时区进行修改，如`setUTCHours()`

```js
let today = new Date();

today.setHours(0);
alert(today); // 日期依然是今天，但是小时数被改为了 0

today.setHours(0, 0, 0, 0);
alert(today); // 日期依然是今天，时间为 00:00:00。
```

## 自动校准
自动校准 Autocorrection 是 `Date` 对象的一个非常方便的特性，允许设置超范围的数值，它会自动校准。

```js
// 超出范围的日期组件将会被自动分配
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ……是 1st Feb 2013!
```

:bulb: 这个特性经常被用来获取给定时间段后的日期

```js
// 获取 现在 70 秒后的日期，不需要去考虑手动考虑时间如何进位等繁琐操作，Date 对象会帮我们处理
let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // Thu Apr 09 2020 17:12:40 GMT+0800 (中国标准时间)，显示正确的日期信息

// 设置 0 甚至可以设置负值
let date = new Date(2016, 0, 2); // 2016 年 1 月 2 日
date.setDate(0); // 天数最小可以设置为 1，所以这里设置的是上一月的最后一天
alert( date ); // 31 Dec 2015
```

## 日期转换为数字
当 `Date` 对象被转化为数字时，得到的是对应的时间戳

```js
let date = new Date(2016, 0, 2);
alert(+date); // 1451664000000，以毫秒为单位的数值，与使用 date.getTime() 的结果相同
```

## 日期差值
`Date` 对象可进行相减，相减的结果是以毫秒 `ms` 为单位时间差，可以用于时间测量

```js
let start = new Date(); // 开始测量时间

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 结束测量时间

alert( `The loop took ${end - start} ms` );
```

:warning: 如果我们仅仅想要测量时间间隔，可以使用特殊的方法 `Date.now()`，它会返回当前的时间戳，相当于 `new Date().getTime()`，该种方法性能更佳（因为它不会创建中间的 `Date` 对象，相减时不需要进行类型转换，而且不会对垃圾处理造成额外的压力），常用于 JavaScript 编写游戏或其他的特殊应用场景。

## 度量
度量 benchamarking 是指性能测量，一般是针对很耗 CPU 性能的函数，通常使用运行时间作为度量 benchmark 参考。当多个函数实现相同的功能，一般使用运行时间最短的那一个。

:bulb: 为了得到更加可靠的度量，整个度量测试包应该重新运行多次。进行微度量测试时要小心，现代的 JavaScript 引擎执行了很多优化，与「正常使用」相比它们可能会改变「人为测试」的结果，特别是在我们对很细微的东西进行度量测试时，例如 `operator` 的工作方式或内建函数。因此如果你想好好了解一下性能，请学习 JavaScript 引擎的工作原理。在那之后，你可能再也不需要微度量了。关于 V8 引擎的大量文章，可以在 [http://mrale.ph](http://mrale.ph/) 找到。

```js
// 度量函数 diffSubtract 和 diffGetTime 性能
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 在主循环中增加“升温”环节
bench(diffSubtract);
bench(diffGetTime);

// 开始度量，交替运行 bench(upperSlice) 和 bench(upperLoop) 各 10 次
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );
```