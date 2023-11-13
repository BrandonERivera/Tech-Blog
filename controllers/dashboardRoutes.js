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

router.get('/change/:id', withAuth, async (req, res) => {
	try {
		const blogpostData = await Blogpost.findByPk(req.params.id);
	
		  const blogpost = blogpostData.get({ plain: true });
	
		  res.render('change', { blogpost,
			layout: 'dashboardlayout',
		  });

	  } catch (err) {
		res.status(500).json(err)
	  }
});

module.exports = router;