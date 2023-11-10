const router = require('express').Router();
const { Blogpost } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
	try {
		const blogpostData = await Blogpost.findAll({
			where: {
				user_id: req.session.user_id,
			},
		});
		const blogpost = blogpostData.map((blogpost) =>
			blogpost.get({ plain: true })
		);
		res.render('dashboard', { blogpost, layout:"dashboardlayout" });
	} catch (err) {
		res.redirect('login');
	}
});

router.get('/make', withAuth, async (req, res) => {
	res.render('makepost', {layout:"dashboardlayout"});
});

module.exports = router;