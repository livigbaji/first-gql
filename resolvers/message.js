let messages = require('../models/mesage');
const users = require('../models/user');
const _ = require('lodash');

module.exports = { Query: {
    messages: (parent, args) => {
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
        const { [id]: message, ...otherMessages } = messages;
        if (!message) {
            return false;
        }
        messages = otherMessages;
        return true;
    },
  },
  Message: {
    user: (message, args, { models }) => {
        return users.find(({id}) => id == message.user_id);
    },
  }, 
};
