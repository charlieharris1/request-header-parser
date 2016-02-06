'use strict';

var path = process.cwd();
var RequestHandler = require(path + '/app/controllers/requestHandler.js');

module.exports = function (app) {

	var requestHandler = new RequestHandler();

	app.route('/')
		.get(function(req, res){
			res.redirect('/api/whoami')
		})

	app.route('/api/whoami')
		.get(requestHandler.reqHeaderParser);
};