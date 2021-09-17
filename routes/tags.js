const express = require('express');
const router = express.Router()
const Tpost = require('../models/tpost');
const Comment = require('../models/comment');

router.get('/', (req, res) => {
	const tagsArray = ["jokes",
"technology",
"news",
"ideas",
"random",
"others"]

	res.render('tags', {tagsArray})
})

router.get('/:tagID', (req, res) => {
	const tg = req.params.tagID;
	res.render('viewtag', {tg})
})


module.exports = router;