const router = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
	try {
		const newBlogPost = await Blogpost.create({
			...req.body,
			userId: req.session.userId,
		});
		res.json(newBlogPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const blogData = await Blogpost.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!blogData) {
			res.status(404).json({ message: 'not correct id' });
		}
		res.status(200).json(blogData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const blogData = await Blogpost.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!blogData) {
			res.status(404).json({ message: 'not correct id' });
		}
		res.status(200).json(blogData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
