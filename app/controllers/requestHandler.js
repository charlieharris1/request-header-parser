'use strict';

function RequestHandler () {

    function getIpAddress(req){
        return  req.headers['x-forwarded-for'];
    }

    function getLanguage(req){
        return req.headers['accept-language'].split(',', 1)[0];
    }

    function getMyOs(req){
        return req.headers['user-agent'].split('(', 2)[1].split(')', 1)[0];
    }
    
	this.reqHeaderParser = function (req, res) {
	    var parsedHeaders = {
	      ipaddress: getIpAddress(req),
	      language: getLanguage(req),
	      software: getMyOs(req)
	    };
		res.json(parsedHeaders);
	};
}

module.exports = RequestHandler;
