const express = require('express');
const router = express.Router()
const Tpost = require('../models/tpost');
const Comment = require('../models/comment');
const badwords = require('bad-words');
const filter = new badwords();

router.get('/', async (req, res) => {
	const tpost_data = await Tpost.find();
	res.render('wall', {tpost_data});
})

router.get('/:postID', async (req, res) => {
	const tpost_data = await Tpost.findById(req.params.postID);
	res.render('view', {tpost_data})
	// res.send(tpost_data)
})

router.post('/', async (req, res) => {

	const title = filter.clean(req.body.title);
	const tpostBody = filter.clean(req.body.tpostBody);
	const date = req.body.date;
	const tags = req.body.tags;

	const newTpost = new Tpost({title: title, tpostBody: tpostBody, date:date, tags:tags});
	await newTpost.save();
	res.redirect(`/wall/${newTpost._id}`)	
	// res.send('done')

})

module.exports = router;