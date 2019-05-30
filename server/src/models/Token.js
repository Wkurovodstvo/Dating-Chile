module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('Token', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: 'User'
            }
        },
        /*authenticationData: {
            type: DataTypes.JSON,
            allowNull: true
        },*/
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    });
    Token.associate = (models) => {
        Token.belongsTo(models.User, {as: 'user', foreignKey: 'userId', sourceKey: 'id' });
    };
    return Token;
};
