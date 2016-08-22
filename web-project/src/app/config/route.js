
export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  // 去掉路由中的「#」井号
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/auth/home/home.html',
      controller: 'homeCtrl'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'app/account/account.html',
      controller: 'accountCtrl'
    })
    ;

  $urlRouterProvider.otherwise('/');
};
