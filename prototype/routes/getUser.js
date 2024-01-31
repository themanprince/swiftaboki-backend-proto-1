var express = require('express');
var router = express.Router();
const userKini = require(__dirname + "/../userKini");

/* GET users listing. */
router.get('/user/:email', function(req, res, next) {
	const {email} = req.params;
	
	const user = userKini.filter(pesin => pesin.email == email);
	
	if(!user.length)
		return res.status(404).send({"msg": "user dont exist"});
	
	toSend = user[0]; //list filtered
	
	res.status(200).send(toSend);
});

module.exports = router;
