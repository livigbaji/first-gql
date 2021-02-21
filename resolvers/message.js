let messages = require('../models/message');
const users = require('../models/user');
const _ = require('lodash');

module.exports = { Query: {
	messages: () => {
		return messages;
	},
	message: (parent, { id }) => {
		return messages.find(({ id: messageID }) => messageID == id);
	},
},
Mutation: {
	createMessage: (parent, { text }, { me }) => {
		const { id: lastID } = _.last(messages);
		const id = lastID+1;
		const message = {
			id,
			text,
			user_id: me.id,
		};
		messages[id] = message;
		return message;
	},
	deleteMessage: (parent, { id }) => {
		const messageExists = !!messages.find(({ id: messageID }) => id == messageID);
		if (!messageExists) {
			return false;
		}
		messages = messages.filter(({ id: messageID }) => messageID != id);
		return true;
	},
},
Message: {
	user: (message) => {
		return users.find(({id}) => id == message.user_id);
	},
}, 
};
