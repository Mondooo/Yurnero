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
