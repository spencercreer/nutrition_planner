const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Food extends Model {

    };
    Food.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serving_size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calories: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        carbs: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        protein: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        fat: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        sodium: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Food',
        timestamps: false,
    }
    );
        
      
    return Food;
};