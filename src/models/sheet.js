"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Sheet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Sheet.init(
        {
            problemLink: {
                type: DataTypes.STRING(1234),
                allowNull: false,
            },
            topicTag: {
                type: DataTypes.ENUM,
                values: ["EASY", "MEDIUM", "HARD"],
            },
            submissionLink: {
                type: DataTypes.STRING(1234),
                default: null,
            },
            explaination: {
                type: DataTypes.TEXT,
            },
            supportImage: {
                type: DataTypes.STRING(1234),
                default: null,
            },
        },
        {
            sequelize,
            modelName: "Sheet",
        }
    );
    return Sheet;
};
