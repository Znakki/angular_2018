const express = require('express');
const router = express.Router();

module.exports = router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	setTimeout(next, 500);  // add only for loading testing(spinner)
});
