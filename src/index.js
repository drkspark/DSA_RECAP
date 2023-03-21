const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        console.log(req.body);
        return res.status(200).json({ data: "Hello" });
    });

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
};

setupAndStartServer();
