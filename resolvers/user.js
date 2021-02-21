
const User = require('../models/user');
const Message = require('../models/message');

module.exports =  { 
	Query: {
		users: () => {
			return User.findAll();
		},
		user: (parent, { id }) => {
			return User.findByPk(id);
		}, 
	},
	User: {
		messages: (user) => {
			return Message.findAll({  
				where: { user_id: user.id }
			});
		},
	}, 
};