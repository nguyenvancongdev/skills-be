const express = require('express')
const route = express.Router();
const createError = require('http-errors');
//get a list of all User;
route.get('/users', (req, res, next) => {
    next(createError.InternalServerError())
    // console.log(a)
    res.json({
        status: 'success',
        element: [{
         
        }]
    })
} )
module.exports = route;