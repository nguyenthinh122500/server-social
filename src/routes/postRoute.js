const express = require('express');
const { getListPost } = require('../controllers/post');
const { checkToken } = require('../controllers/user');
const postRoute = express.Router();



postRoute.get('/getlistposts',checkToken, getListPost)


module.exports = postRoute
