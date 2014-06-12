/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

//LIBRARY INCLUSIONS//
var querystring = require('querystring');
//////////////////////

module.exports = {
	signup: function(req, res){
        res.view();
    },

    processSignup: function(req, res){
        console.log(querystring.stringify(req.body));
    },

    login: function(req, res){
        res.view();
    },

    processLogin: function(req, res){
        console.log(req.body);
    }
};

