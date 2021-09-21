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

router.get('/:tagID', async (req, res) => {
	const tg = req.params.tagID;
	const tpostByTag = await Tpost.find({ tags: tg });

	res.render('viewtag', {tg, tpostByTag})
})

module.exports = router;