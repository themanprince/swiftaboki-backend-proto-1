function cors(req, res, next) {
	
	//setting this kini for all requests... cus of non-preflighted ones
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Origin", /*using specific url so that cookies will be allowed*/`*`);
	
	if(req.method === "OPTIONS") {
		console.log("got a preflight request");
		res.setHeader("Access-Control-Allow-Methods",/*using specific kini so cookies will be allowed*/ "POST, GET, PUT");
		res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.setHeader("Access-Control-Max-Age", "900"/*900secs / 15mins*/);
		res.setHeader('Content-Length', '0');
	    res.writeHead(204);
	    res.end();
	} else
		next();
}

module.exports = cors;