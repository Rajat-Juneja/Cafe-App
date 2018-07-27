const mongoose = require('mongoose');
const dbConfig = require('./Url');
const logger = require('../config/logger');

mongoose.connect(dbConfig.url);
logger.debug("Connection with MongoDB made");

module.exports = mongoose;
