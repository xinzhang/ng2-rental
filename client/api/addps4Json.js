var fs = require('fs');
var mongodb = require('mongodb');

var randomString = function (len, bits)
{
    bits = bits || 36;
    var outStr = "", newStr;
    while (outStr.length < len)
    {
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr.toUpperCase();
};

fs.readFile('./products/ps4.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var jsonObj = JSON.parse(data);

    var url = 'mongodb://localhost:27017/MEA2N';
    mongodb.connect(url, function (err, db) {
        if (err) throw err;

        var collection = db.collection('games_library');
        var i = 1;
        jsonObj.forEach(function (val) {
            var jsonGameObj = val;
            
            var title = jsonGameObj['Game Name'];
            
             collection.findOne({ gameTitle: title }, function (err, doc) {
                 if (doc == null || doc._id == null) {

                     var doc = {};
                     doc.gameTitle = title;
                     doc.releaseDate = jsonGameObj['release date'];
                     doc.platform = 'ps4';
                     doc.publisher = jsonGameObj.Publisher;
                     doc.smallImageUrl = jsonGameObj['Box Art'];
                     doc.largeImageUrl = '';
                     doc.quanity = 9999;                     
                     doc.edition = 'standard';
                     doc.exclusive = jsonGameObj.Exclusive;
                     doc.genre = jsonGameObj.Genre;
                     doc.ageRating = jsonGameObj['Age Rating'];
                     doc.gameId = i;
                     doc.isin = randomString(10);
                     
                     i++;
                     
                     collection.insertOne(doc, function (err, result) {
                          if (err) throw err;
                          console.log(JSON.stringify(result));
                     })
                 }
            });

        });

    });
});

