var express = require('express');
var paymentRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var util = require('util');

var Pin = require('pinjs');

var pin = Pin.setup({
    key: 'vD3FnO5n7elLWkK-z4zJpg',
    production: false
});

paymentRouter.route('/card')
    .all(function (req, res, next) {
        if (!req.user) {
            //res.redirect('/');
            console.log('req user is not defined.');
            res.status(401).send("please login first");
        }
        else {
            console.log('current user' + JSON.stringify(req.user))
            next();
        }
    })
    .post(function (req, res) {
        console.log('my ' + JSON.stringify(req.body));
        console.log('my user:' + JSON.stringify(req.user));

        paymentViewModel = req.body;

        var payment = {
            amount: paymentViewModel.amount,
            description: 'subscription charge monthly',
            email: 'test@abc.com',//req.user.email,
            ip_address: '203.192.1.172',
            card: {
                number: paymentViewModel.number,
                expiry_month: paymentViewModel.expiry_month,
                expiry_year: paymentViewModel.expiry_year,
                cvc: paymentViewModel.cvv,
                name: paymentViewModel.name,
                address_line1: paymentViewModel.address_line1,
                address_line2: paymentViewModel.address_line2,
                address_city: paymentViewModel.address_city,
                address_postcode: paymentViewModel.address_postcode,
                address_state: paymentViewModel.address_state,
                address_country: 'AU'
            }
        }

        pin.createCharge(payment, function (err, ret) {
            console.log(ret.body);
            if (err)
                res.status(500).send(err.errorMessage);
                
            var url = 'mongodb://localhost:27017/MEA2N';
            mongodb.connect(url, function (err, db) {
                
                var collection = db.collection('users');

                collection.updateOne(
                    { "_id": req.user._id },
                    {
                        $set: { "card": payment },
                    }, function (err, results) {
                        res.send("Payment Processed.");
                    }
                )
            });
        });
    });

module.exports = paymentRouter;
