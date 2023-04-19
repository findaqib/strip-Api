"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var app = express();
app.get('/', function (req, res) {
    //   res.json({ data: 'Hello World' });
    res.send('Hello World');
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Application is connected with ".concat(port));
});
