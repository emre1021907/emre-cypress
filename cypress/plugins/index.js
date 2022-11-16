const { config } = require("bluebird");

module.exports = (on,config ) =>  {
    require('cypress-mochawesome-reporter/plugin')(on)
};