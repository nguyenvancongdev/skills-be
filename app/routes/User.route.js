const express = require('express')
const route = express.Router();
//get a list of all User;
route.get('/users', (req, res, next) => {
    res.json({
        status: 'success',
        element: [{
         
        }]
    })
} )
module.exports = route;