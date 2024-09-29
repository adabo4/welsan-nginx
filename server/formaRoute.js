const express = require("express");
const subscribeEmail = require("./formaController"); // This is correct because you exported subscribeEmail directly

const emailRouter = express.Router();

emailRouter.post("/", subscribeEmail);

module.exports = emailRouter;
