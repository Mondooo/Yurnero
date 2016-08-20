export default ($scope, helloSer) => {
	helloSer.getData().then((success) => {
		console.log(success);
	}, (err) => {
		console.log(err);
	});
};