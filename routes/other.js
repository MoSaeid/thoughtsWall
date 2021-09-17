const express = require('express');
const router = express.Router()
const Tpost = require('../models/tpost');
const Comment = require('../models/comment');

router.get('/', (req, res) => {
	res.render('home')
})

router.get('/new', (req, res) => {
	res.render('new')
})


module.exports = router;