export default ($resource, BASE_URL) => {
	'ngInject';
	return {
		account: (headers) => {
			return $resource(BASE_URL+'/account', {}, {
				post: {
					method: 'POST',
					headers: headers, 
				},
				get: {
					method: 'GET',
					headers: headers,
				}
			});
		},
	};
};