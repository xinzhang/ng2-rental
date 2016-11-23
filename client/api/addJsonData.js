var fs = require('fs');
var mongodb = require('mongodb');

fs.readFile('./products/games.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var jsonObj = JSON.parse(data);

    var url = 'mongodb://localhost:27017/MEA2N';
    mongodb.connect(url, function (err, db) {
        if (err) throw err;

        var collection = db.collection('games');

        jsonObj.forEach(function (val) {
            var jsonGameObj = val;

            collection.findOne({ gameTitle: jsonGameObj.gameTitle }, function (err, doc) {
                if (doc == null || doc._id == null) {

                    var doc = jsonGameObj;
                    
                    collection.insertOne(doc, function (err, result) {
                        if (err) throw err;
                        console.log(JSON.stringify(result));
                    })
                }
            });

            //  collection.findAndModify({
            //      query: { gameTitle: jsonGameObj.gameTitle },
            //      update: {
            //          $setOnInsert: { jsonGameObj}
            //      },
            //      new: true,   // return new doc if one is upserted
            //      upsert: true // insert the document if it does not exist
            //  }, function(err, result){
            //  });
        });

    });
});

