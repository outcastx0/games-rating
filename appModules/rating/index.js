const config = require('./config');
const { makeRatingFile } = require('./rating-file');
const { createRating, updateRating} = require('./calculations');
const { create } = require('domain');

module.exports = { config, makeRatingFile, createRating, updateRating };