var express = require('express');
var router = express.Router();
const userKini = require("../userKini");

router.post('/login', (req, res, next) => {

	const {email} = req.body;

	const singleUser /*an array of one element */= userKini.filter(pesin => pesin.email == email);

	if(! singleUser.length)
		return res.status(400).send({"msg": "user dont exist"});
	
	req.session.email = email;
	
	res.status(200).send({user: singleUser[0]});
});

module.exports = router;