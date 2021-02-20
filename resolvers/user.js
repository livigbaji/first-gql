
const users = require('../models/user');
const messages = require('../models/mesage');

module.exports =  { 
    Query: {
        users: (parent, args) => {
            return users;
        },
        user: (parent, { id }) => {
            return users.find(({ id: userID }) => userID == id);
        }, 
    },
    User: {
        messages: (user, args, { models }) => {
            return messages.filter(({ user_id }) => user_id == user.id);
        },
    }, 
};