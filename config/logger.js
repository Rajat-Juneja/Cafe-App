const log4js = require('log4js');


log4js.configure({
    appenders:{
        debug:{
            type:'file',
            filename:'./logs/debug.log',
            category:'debug',
            maxLogsize: 20480 // in bytes
        },
        error:{
            type:'file',
            filename:'./logs/error.log',
            category:'error',
            maxLogsize: 20480
        }
    },
    categories: {
        default: {
            appenders: ['debug'],
            level: 'debug'
        }
    }
});


var logger = log4js.getLogger('debug');

module.exports = logger;