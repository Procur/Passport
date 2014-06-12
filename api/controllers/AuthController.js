/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	signup: function(req, res){
        res.view();
    },

    processSignup: function(req, res){
        console.log(req.body);
    },

    login: function(req, res){
        res.view();
    },

    processLogin: function(req, res){
        console.log(req.body);
    }
};

