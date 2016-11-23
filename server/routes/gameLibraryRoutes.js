var express = require('express');
var gameLibraryRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

gameLibraryRouter.route('/search/:q')
    .get(function (req, res) {

        var keywords = req.params.q

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games_library');

            collection.find({
                $text: { $search: keywords }
            }, function (err, cursor) {
                if (err) res.status(400).send(err.errorMessage);

                var docs = [];
                cursor.each(function (err, item) {
                    if (err) {
                        console.log(err);
                        db.close();
                        res.status(500).send(err.error);
                    }
                    
                    if (item != null) {
                        docs.push(item);
                    }
                    else {
                        db.close();
                        res.status(200).send(docs);                        
                    }                    
                });
                
            }); //end find

        });

    });

gameLibraryRouter.route('/addToRent/:isin')
    .get(function (req, res) {
        var isin = req.params.isin;
        
        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games_library');
            collection.findOne({
                isin: isin
            },
                function (err, result) {
                    var lib_game = result;

                    db.collection('games').find({
                        gameId: { "isin": isin }
                    }, function (err, cursor) {
                        if (err) res.status(400).send(err.errorMessage);
                                                
                        if (cursor.currentObj == null) {
                            //add the game from library to rental   
                            lib_game._id = null; 
                            if (lib_game.quantity == "undefined")
                                lib_game.quantity = 1;
                            else
                                lib_game.quantity = lib_game.quantity + 1;

                            lib_game.rentalAvailable = true;
                                                   
                            db.collection('games').insertOne(lib_game, function(err, result){
                                if (err) throw err;
                                res.status(200).send(result);        
                            })                          
                        }
                        else {
                            var currentObj = cursor.currentObj;
                            
                            if (currentObj.quantity == "undefined")
                                currentObj.quantity = 1;
                            else
                                currentObj.quantity = currentObj.quantity + 1;
                                
                            console.log(currentObj);                                                            
                            currentObj.rentalAvailable = true;
                            
                            db.collection('games').update(currentObj, function(err, result){
                                if (err) throw err;
                                res.status(200).send(result);                                        
                            });
                        }
                    })//end find from games
                }
                
            ); //end findOne from games_library 
        });
    });
    
 gameLibraryRouter.route('/detail/:isin')
    .get(function (req, res) {
        var isin = req.params.isin;

        var url = 'mongodb://localhost:27017/MEA2N';
        mongodb.connect(url, function (err, db) {

            var collection = db.collection('games_library');
            collection.findOne({
                isin: isin
            },
                function (err, result) {
                    if (err) res.status(400).send(err.errorMessage);                    
                    res.status(200).send(result);
                }

            ); //end findOne     
        });
    });

module.exports = gameLibraryRouter;