const router = require('express').Router();
const { Comment, Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		// Get all projects and JOIN with user data
		const blogpostData = await Blogpost.findAll({
			include: [
				{
					model: User,
					attributes: ['name'],
				},
				{
					model: Comment,
				},
			],
		});

		// Serialize data so the template can read it
		const blogpost = blogpostData.map((blogpost) =>
			blogpost.get({ plain: true })
		);

		// Pass serialized data and session flag into template
		res.render('homepage', {
			blogpost,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/blogpost/:id', async (req, res) => {
	try {
		const blogpostData = await Blogpost.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['name'],
				},
				{
					model: Comment,
				},
			],
		});

		const blogpost = blogpostData.get({ plain: true });

		res.render('blogpost-single', {
			blogpost,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

router.get('/signup', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}

	res.render('signup');
});

module.exports = router;
