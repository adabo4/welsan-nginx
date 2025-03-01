const express = require("express");
const subscribeEmail = require("./formaController"); // This is correct because you exported subscribeEmail directly
const sendEmail = require('./emailController')

const subscribeRouter = express.Router();
const emailRouter = express.Router();

subscribeRouter.post("/", subscribeEmail);
emailRouter.post("/", sendEmail);

module.exports = { subscribeRouter, emailRouter };
