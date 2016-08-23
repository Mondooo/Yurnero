/*
* $http, $httpProvider服务注意点 --Mondoooo
* 
* $http是angularjs的核心服务, 通过浏览器的XMLHttpRequest或者JSONP与HTTP服务器进行通信.
* $httpProvider则是用来改变$http服务的默认行为.
* $http仅需要一个[配置对象]参数自动生成HTTP request, 并返回一个promise(异步获取服务器响应).
* 关于promise注意: 只有状态码在200-299才会执行[成功回调函数].
* $http会自动给所有的请求添加[默认headers], 可通过$httpProvider予以更改.
* angularjs可以对同步或异步的请求[前]与响应[后]进行拦截, 拦截器通过向$httpProvider.interceptors数组中添加服务来进行添加. 
* 拦截器步骤: 1. 将拦截器注册为服务 2. 将该服务push到$httpProvider.interceptors数组中(也可以通过匿名函数(服务)的方式添加, 见下).
* 拦截器一共有四种类型: request, requestError, response, responseError, xxError会在上一个xx拦截器出错或者被异步reject的情况下被调用.
* web网站主要的威胁来自于两个方面: 1. JSON弱点攻击(通过给响应json加prefix解决) 2. XSRF跨站点请求伪造攻击(通过token解决).
*/
export default ($httpProvider, lcConfig) => {
  'ngInject';

  const httpTimeout = lcConfig.httpTimeout;
  const apiHost = lcConfig.apiHost;

  // 跨域请求发送验证信息
  $httpProvider.defaults.withCredentials = true;
  // delete 可以携带 josn 数据。
  $httpProvider.defaults.headers.delete = {
    'Content-Type': 'application/json;charset=utf-8'
  };

  // 全局 $http 请求配置。
  $httpProvider.interceptors.push([() => {
    return {
      request: (config) => {
          config.timeout = httpTimeout;

          // 当 url 中没有 http 或者 https 的时候，自动拼接默认的 apiHost
          if (!/^[http|https]/.test(config.url) && !/\.html$/.test(config.url)) {
              config.url = apiHost + config.url;
          }
          return config;
      },
      response: (response) => {
          if (/\.html/.test(response.config.url)) {
              return response;
          } else {
              return response; //坑爹的地方, 业界标准, RESTful返回的数据名称叫[data].
          }
      },
      responseError: function(response) {
        return Promise.reject(response.data);
      }
    };
  }]);

};
