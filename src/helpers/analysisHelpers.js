import axios from 'axios';

const getData = function(cb) {
	axios.get({
				method: 'get',
				url:'/analysis',
				responseType:'stream'})
		.then(function(response) {
			cb(null, response);
		}).catch(function(err) {
			cb(err);
		})
}

export default getData;