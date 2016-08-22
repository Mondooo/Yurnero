export default ($scope, accountRes, qService) => {
	qService.httpGet(accountRes.account, {}, {}).then((data) => {
		console.log(data);
	}, (err) => {

	});
};