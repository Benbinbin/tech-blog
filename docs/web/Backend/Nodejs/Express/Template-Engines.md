---
tags:
  - nodejs
  - express
---

# Express 模板引擎

参考：
* [将模板引擎用于 Express](http://expressjs.com/zh-cn/guide/using-template-engines.html)
* [为 Express 开发模板引擎](http://expressjs.com/zh-cn/advanced/developing-template-engines.html)
* [Using EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)

在 Express 中使用模板引擎可以将模板语言编写的文档结合数据动态编译生成 HTML 文档返回给请求的客户端。

1. 需要在项目中安装相应的 模板引擎 npm 模块，如 ejs

```bash
npm install ejs --save
```

2. 在 Express 可以呈现模板文件之前，必须设置以下应用程序设置：

- 设置参数 `views` 指定模板文件所在目录

```js
app.set('views', './views')
```

- 设置参数 `view engine` 指定要使用的模板引擎

```js
app.set('view engine', 'ejs')
```

:bulb: 在设置视图引擎之后，可以不必指定该引擎或者在应用程序中装入模板引擎模块，Express 在内部装入此模块。如果需要也可以在设定视图引擎之前，手动导入并指定引擎 `engine`

```js
// 使用 ejs 的扩展版本 ejs-locals 作为模板引擎
let engine = require('ejs-locals');

app.engine('ejs', engine);
```

3. 在指定的模板文件目录中创建模板文档，并编写文档

```ejs
// 📁 views/index.ejs
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS</title>
</head>

<body>
  <h1><%= title %></h1>
  <p><%= message %> </p>
</body>

</html>
```

4. 创建路由（指定 HTTP 方法）以呈现/渲染指定的（编译后）文档，其中使用函数 `res.render()` 指定使用哪一个模板生成网页，可以设置第二个可选参数，以对象的形式传递数据到模板文档中

```js
// 向主页发出请求时，index.ejs 文件将呈现为 HTML
app.get('/', function (req, res) {
  res.render('index', {
    title: 'ejs',
    message: 'Hello World!'
  })
});
```

:warning: 如果未设置 `view engine` 属性，必须在响应调用 `render` 时指定模板文档的扩展名。

:bulb: 与 Express 兼容的模板引擎导出名为 `__express(filePath, options, callback)` 的函数，该函数由 `res.render()` 函数调用以呈现模板代码。 某些模板引擎并不遵循此约定，[Consolidate.js](https://www.npmjs.org/package/consolidate) 库通过映射所有流行的 Node.js 模板引擎来遵循此约定，因此可以在 Express 内无缝工作。