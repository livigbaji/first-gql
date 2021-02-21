const { Model,DataTypes } = require('sequelize');
const DB = require('./index');


class User extends Model {
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	username: {
		type: new DataTypes.STRING(128),
		allowNull: false,
	}
}, {
	tableName: 'users',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	sequelize: DB
});

// User.associate = models => {
// 		User.hasMany(models.Message, { onDelete: 'CASCADE' });
// 	};

exports = User;