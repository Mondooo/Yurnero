export default ($scope, $timeout, $state, $q, qService, accountRes) => {
  'ngInject';

  $scope.login = () => {
  	if (isNull($scope.loginAccount)) {
  		$scope.errMessage = "账号不能为空!";
  		$q((resolve, reject) => {
			$timeout(() => {
				$scope.errMessage = "";
				resolve();
			}, 1500);});
  		return;
  	}
  	$scope.errMessage = ""; //这一块处理一下
  	let info = {
  		'X-Auth-Username': $scope.loginAccount,
  		'X-Auth-Password': $scope.loginPassword
  	};
  	qService.httpPost(accountRes.account, {}, info, {}).then((data) => {
  		if (data.success) {
  			$state.go('account');
  		}
  		$scope.errMessage = "账号/密码不匹配!";
  	}, (err) => {
  		console.log(err);
  	});
  };

  let isNull = (value) => {
  	return typeof(value) == undefined || value == null;
  };
};
