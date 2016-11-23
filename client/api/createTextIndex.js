var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/MEA2N';
mongodb.connect(url, function (err, db) {
    if (err) throw err;

    var collection = db.collection('games_library');
    collection.createIndex({
        "$**": "text"
    }, function(err, res){
        console.log('index created');
        db.close();
    });
    
    //example for search
    //db.getCollection('games_library').find({$text:{$search: "uncharted"}});
    
    //add field
    //db.Doc.update({"_id": b["_id"]}, {"$set": {"geolocCountry": myGeolocCountry}})
    
    //add all
    //db.getCollection('games_library').update({"disc":{"$exists":false}}, {"$set": {"disc": true}}, false, true)
});
    
    