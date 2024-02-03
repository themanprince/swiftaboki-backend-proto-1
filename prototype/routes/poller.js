//most likely bad practice but this address gon be the one I'll be polling in the browser
//to see if handleredirect url done received any thing from transak

//handleredirect gon send result to this url when it receives anything from transak

const router = require("express").Router();

let data="nothing yet";

//POST is so that handleredirect can send data to this mofo
router.post("/polo", (req, res, next) => {
	const {message} = req.body;
	data = message;
	res.end();
});
//GET is so that I can poll it in the browser
router.get("/polo", (req, res, next) => {
	res.send({data});
});

module.exports = router;