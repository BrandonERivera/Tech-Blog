const { Comment } = require('../models')
const commentdata = [
	{
		"text": "a comment",
		"blogpost_id": 1
	},
	{
		"text": "a second comment",
		"blogpost_id": 1
	},
	{
		"text": "a new comment",
		"blogpost_id": 2
	}
]

const seedcommentdata = () =>  Comment.bulkCreate(commentdata);
module.exports = seedcommentdata;
