function cors(req, res, next) {
	//setting this kini for all requests... cus of non-preflighted ones
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Origin", /*using specific url so that cookies will be allowed*/`http://localhost:3000`);
	
	if(req.method === "OPTIONS") {
		res.setHeader("Access-Control-Allow-Methods",/*using specific kini so cookies will be allowed*/ "POST, GET, PUT");
		res.setHeader("Access-Control-Allow-Headers", "*");
		res.setHeader("Access-Control-Max-Age", "900"/*900secs / 15mins*/);
		res.setHeader('Content-Length', '0');
	    res.writeHead(204);
	    res.end();
	} else
		next(req, res);
}

module.exports = cors;