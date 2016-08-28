export default ($scope, accountRes, ipRes, qService) => {
	
	qService.httpGet(accountRes.account, {}, {}).then((data) => {
		$scope.data = data.data;
		if ($scope.data.sex === 1) {
			$scope.data.sex = '男';
		} else {
			$scope.data.sex = '女';
		}
	}, (err) => {

	});
	qService.httpGet(accountRes.dp, {}, {}).then((data) => {
		$scope.dp = data.data;
	}, (err) => {

	});
	// qService.httpGet(ipRes.ip, {
	// 	'ak': 'ChOc9kF1ztcQyKKGBYT2yXHCpyohE9Ll'
	// }, {}).then((success) => {
	// 	$scope.addressByIp = success.content.address;
	// }, (err) => {

	// });
};