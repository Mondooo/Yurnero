// ##引入依赖包(*.js)+
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-mate');

// ##引入自定义中间件
var routes = require('./routes/index'); // ##路由级中间件
var users = require('./routes/users'); // ##路由级中间件

// ##创建一个Express应用, 是express模块的入口
var app = express();

// use ejs-locals for all ejs templates
app.engine('ejs', engine);

// 这里设置根目录的views文件夹为渲染视图所在文件夹;设置view引擎为ejs
app.set('views', path.join(__dirname, 'views')); // ##__dirname表示当前文件所在路径
app.set('view engine', 'ejs');

// ##app.use([path,]function[,function...])该函数用来挂载中间件
// ##这里默认[path="/"], 所以对于此app的每一个请求, 下面挂在的中间件都会依次执行
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // ##应用级中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // ##定义项目的静态资源路径, 这是Express唯一的内置中间件

app.use('/', routes); // ##挂载自定义的路由中间件到应用
app.use('/users', users);

// ##如果请求路径匹配不到, 交由下面的中间件处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err); // ##next()函数表示前往下一个中间件
});

// error handlers

// ##错误处理中间件必须使用四个参数, 否则会被识别为一个常规中间件, 不能处理错误
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
