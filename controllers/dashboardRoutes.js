const router = require('express').Router();
const { Blogpost } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
	try {
		const blogpostData = await Blogpost.findAll({
			where: {
				userid: req.session.userid,
			},
		});
		const blogpost = blogpostData.map((blogpost) =>
			blogpost.get({ plain: true })
		);
		res.render('dashboard', { blogpost });
	} catch (err) {
		res.redirect('login');
	}
});

router.get('/make', withAuth, async (req, res) => {
	res.render('makepost');
});

module.exports = router;