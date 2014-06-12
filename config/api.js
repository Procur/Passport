/**
 * api.js
 *
 * @module      :: api
 * @description :: Procur API configuration settings and helper methods
 *
 */

module.exports.api = {
    host: 'http://localhost:1337',

    parse: function parse(response){
        return JSON.parse(response.entity)
    }
}