var Pin = require('pinjs');

var pin = Pin.setup({
    key: 'vD3FnO5n7elLWkK-z4zJpg',
    production: false
})

var testpayment1 = {
    amount: 200,
    description: 'test charge',
    email: 'testuser@mygames.com.au',
    ip_address: '203.192.1.172',
    card: {
        number: 5520000000000000,
        expiry_month: '05',
        expiry_year: 2017,
        cvc: 123,
        name: 'Test user',
        address_line1: '15 Cole Ave',
        address_city: 'Baulkham Hills',
        address_postcode: 2153,
        address_state: 'NSW',
        address_country: 'AU'
    }  
};

var testpayment2 = {
    amount: 1889,
    description: 'test charge',
    email: 'xz@mygames.com.au',
    ip_address: '203.192.1.172',
    card: {
        number: 4200000000000000,
        expiry_month: '04',
        expiry_year: 2017,
        cvc: 873,
        name: 'xin zhang',
        address_line1: '15 Cole Ave',
        address_city: 'Baulkham Hills',
        address_postcode: 2153,
        address_state: 'NSW',
        address_country: 'AU'
    }  
};

pin.createCharge(testpayment2, function (err, res) {
        console.log(res.body);
    });