var parseString = require('xml2js').parseString;
var fs = require('fs');

fs.readFile( __dirname + '/awsResponse.xml', 'utf8', function(err, data){
	if (err) {
		throw err;
	}
	console.log(data);
	parseString(data, function (err, result) { 
		if (err) {
			throw err;
		}
		
		//console.dir(JSON.stringify(result));
	});	

});


