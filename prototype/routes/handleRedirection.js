//this is the address that transak will be redirected to when onramping is done
var express = require('express');
var router = express.Router();
const url = require("url");
const qs = require("qs");
const {server_addr} = require(__dirname + "/../constants");

router.get("/handleredirect", async (req, res, next) => {
	//testing parsing functionality
	const parsedResult = url.parse(req.url);
	const queryParams = qs.parse(parsedResult.query);
	
	const reqOptions = {
		"method": "POST",
		"headers":{
			"Content-Type": "application/json"
		},
		"body": JSON.stringify({"message": queryParams})
	};
	
	await fetch(new Request(`${server_addr}/polo`, reqOptions));
	res.end();
});

module.exports = router;