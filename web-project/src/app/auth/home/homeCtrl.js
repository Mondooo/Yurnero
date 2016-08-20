/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($scope, $window, $state) => {
  'ngInject';

  $scope.loginInfo = {
  	loginAcc: $scope.loginAccount,
  	loginPsw: $scope.loginPassword
  };
  $scope.login = () => {
  	$state.go("account");
  };
};
