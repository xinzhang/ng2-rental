var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

authRouter.route('/register')
    .post(function (req, res) {
        console.log('my ' + req.body);

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            var user = {
                email: req.body.email,
                password: req.body.password
            };

            collection.insert(user,
                function (err, results) {
                    req.login(results.ops[0], function () {
                        //res.redirect('/auth/profile');                        
                        res.send(user);
                    })
                });
        });

    });

authRouter.route('/profile')
    .all(function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    })
    .get(function (req, res) {
        console.log('Profile ' + req.body);

        res.json(req.user);
    });

authRouter.route('/login')
    .post(passport.authenticate('local', {
        failureredirect: '/'
    }), function (req, res) {
        //res.redirect('/auth/profile');
        res.json(req.user);
    });

authRouter.route('/logout')
    .get(function(req, res){
        req.logout();
        res.status(200).send('1');
    });

authRouter.route('/checkuser/:username')
    .get(function (req, res) {
            var url = 'mongodb://localhost:27017/MEA2N';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.findOne({
                        email: req.params.username
                    },
                    
                    function (err, results) {
                        if (err) res.json(err.errorMessage);
                        console.log(' server checkuser results returned:' + (results!=null));
                                                                        
                        if (results != null ) {                            
                            res.json('1');
                        } else {
                            res.json('0');
                        }
                    }
                    
                ); //end findOne                                       
        });//end get
    });

module.exports = authRouter;