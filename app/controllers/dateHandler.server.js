'use strict';

function ClickHandler () {

	this.getDateJson = function (req, res) {
		if(req.params.date)

		var unixTimestamp = parseInt(req.params.date);
		var naturalLanguageDate = new Date(unixTimestamp).toString();

		var result = {
			unix: unixTimestamp,
			natural: naturalLanguageDate
		}

		res.json(result);
	};
}

module.exports = ClickHandler;
