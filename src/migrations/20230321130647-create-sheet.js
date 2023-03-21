"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Sheets", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            problemLink: {
                type: Sequelize.STRING(1234),
                allowNull: false,
            },
            topicTag: {
                type: Sequelize.ENUM,
                values: ["EASY", "MEDIUM", "HARD"],
            },
            submissionLink: {
                type: Sequelize.STRING(1234),
                defaultValue: null,
            },
            explaination: {
                type: Sequelize.TEXT,
            },
            supportImage: {
                type: Sequelize.STRING(1234),
                defaultValue: null,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Sheets");
    },
};
