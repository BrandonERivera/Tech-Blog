const { Blogpost } = require('../models')
const blogpostdata = [
	{
		"title": "Blogpost title",
		"text": "blogpost text",
		"user_id": 1
	},
	{
		"title": "Blogpost title 2",
		"text": "blogpost text 2",
		"user_id": 1
	},
	{
		"title": "New Blogpost title",
		"text": "New blogpost text",
		"user_id": 2
	}
];

const seedblogpostdata = () => Blogpost.bulkCreate(blogpostdata);
module.exports = seedblogpostdata;