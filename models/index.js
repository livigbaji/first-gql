const Sequelize = require('sequelize');
const _ = require('lodash');

const customLogger = (queryString, queryObject) => console.log(_.pickBy({
	queryString,
	binding: queryObject.bind
}));

const sequelize = new Sequelize( 
	process.env.DATABASE, 
	process.env.DATABASE_USER, 
	process.env.DATABASE_PASSWORD, 
	{
		dialect: 'postgres',
		logging: customLogger
	});


// const models = {
// 	User: sequelize.import('./user'),
// 	Message: sequelize.import('./message'),
// };
// Object.keys(models).forEach(key => {
// 	if ('associate' in models[key]) {
// 		models[key].associate(models);
// 	}
// });


module.exports = sequelize;