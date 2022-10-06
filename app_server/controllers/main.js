var express = require('express');
var router = express.Router();

module.exports.index = function(req, res, next) {
    console.log('kimi aradın');
    res.render('index', { title: 'Express' });
};
