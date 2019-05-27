module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        balance: {
            type: DataTypes.REAL,
            default: 0
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        online: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        socketId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
    User.associate = function (models) {
        User.hasMany(models.Contest, { foreignKey: 'winnerId', targetKey: 'id' });
        User.hasMany(models.Contest, { foreignKey: 'userId', targetKey: 'id' });
        User.hasMany(models.Entry, { as: 'entries', foreignKey: 'creativeId', targetKey: 'id' });
    };
    return User;
};
