"use strict"

const util = require('util')
const OperationHelper = require('../node_modules/apac/lib/apac').OperationHelper

let opHelper = new OperationHelper({
    awsId: 'AKIAIANMOXRDX7J5HRGA',
    awsSecret: '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',
    assocId: 'xztest20',
    maxRequestsPerSecond: 1
})

const operation = 'ItemSearch'
const params = {
    'SearchIndex': 'All',
    'Keywords': 'ps4',
    'ResponseGroup': 'Images,ItemAttributes,Offers'
}

opHelper.execute(operation, params).then((results, responseBody) => {    
    console.log(responseBody)
}).catch((err) => {    
    console.error(err)
})

// or if you have async/await support...

// try {
//     let response = await
//     opHelper.execute(operation, params)
//     console.log(response.results)
//     console.log(response.responseBody)
// } catch(err) {
//     console.error(err)
// }

// traditional callback style is also supported for backwards compatibility

// opHelper.execute('ItemSearch', {
//     'SearchIndex': 'Books',
//     'Keywords': 'harry potter',
//     'ResponseGroup': 'ItemAttributes,Offers'
// }, function (err, results) {
//     console.log(results)
// })