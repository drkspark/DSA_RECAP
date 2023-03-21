Make sure u name the .env config files as serverConfig.js and not config.js.
Reason the Sequelize cli searches for config file when we have create DB or Tables

The length of the Primary Key, Unique key are limited we can't have a string of length (1234) as Primary Key or Unique.
So didn't add any Primary or Unique Consstraint due to the above reasons

Sheet Model: 
    ProblemLink: String
    topicTag: ENUM("EASY", "MEDIUM", "HARD")
    submissionLink: String
    explaination: Text
    supportImage: String