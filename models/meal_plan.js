const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MealPlan extends Model {
        
    };
    MealPlan.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        breakfast_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        breakfast_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        breakfast_food2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        breakfast_food3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lunch_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lunch_food2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lunch_food3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dinner_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dinner_food2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dinner_food3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        snack_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        snack_food2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        snack_food3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dessert_food1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dessert_food2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dessert_food3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        sequelize,
        modelName:'MealPlan',
        timestamps: false,
    });

    return MealPlan;
}