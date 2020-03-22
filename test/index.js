const request = require('supertest');
const express = require('express');

const app = express();

app.get('/api/users/:id', function(req, res) {
    res.status(200).json([{
        first_name: "Gabriela",
        id: 245,
        last_name: "Paese"
    }]);
});

//TEST GET VALID SINGLE USER
request(app)
    .get('/api/users/245')
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect('Content-Length', '56')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });

//TEST GET SINGLE USER WITHOUT ID
request(app)
    .get('/api/users/')
    .expect(404)
    .end(function(err, res) {
        if (err) throw err;
    });

app.get('/api/merchant/:id', function(req, res) {
    res.status(200).json([{
        "id": 50,
        "display_name": "Merchant - 50",
        "icon_url": "https://commons.wikimedia.org/wiki/File:Google_%22G%22_Logo.svg",
        "funny_gif_url": "https://gph.is/129movC"
    }]);
});

//TEST GET VALID SINGLE MERCHANT
request(app)
    .get('/api/merchant/50')
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect('Content-Length', '160')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });

app.get('/api/transactions/:id', function(req, res) {
    res.status(200).json([{
        "id": 1024,
        "user_id": 478,
        "merchant_id": 1122,
        "date": "2019-04-28T23:00:00.000Z",
        "amount": "33.4101849",
        "description": "Transaction - 1024"
    }]);
});

//TEST GET VALID SINGLE TRANSACTION
request(app)
    .get('/api/transactions/1024')
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect('Content-Length', '137')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });


app.get('/api/userstats/:id', function(req, res) {
    res.status(200).json([{
            "merchantId": 235,
            "userSpent": "9.23",
            "generalAverage": "0.00",
            "percentile": 100
        },
        {
            "merchantId": 1096,
            "userSpent": "16.78",
            "generalAverage": "0.00",
            "percentile": 100
        }]
    );
});

//TEST GET USER STATS
request(app)
    .get('/api/userstats/245')
    .query({startDate: '2019/11/01', endDate: '2019/12/05'})
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect('Content-Length', '161')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });
