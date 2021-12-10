
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })

    Users.associate = (models) => {
        Users.belongsTo(models.Roles, {
            foreignKey: {
                allowNull: false
            }

        })

        
    }

    return Users
}