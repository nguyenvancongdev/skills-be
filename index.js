const express = require('express')
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan')
const PORT = process.env.PORT || 5000 ;
const app = express();
const createError = require('http-errors');
const userRoute = require('./app/routes/User.route');
app.use(helmet())
app.use(morgan('common'))

app.use('/v1/', userRoute)

app.get('/',(req, res, next) => {
    res.send('this is Homes1')
})
app.use((req, res, next) => {
    next(createError(404, 'Not Found !'))
})
app.use((err, req, res, next) => {
    res.status(err.status|| 500)
    res.json({
        status: err.status || 500,
        message: err.message,
        toi: 'ttt'
    })

})

app.listen(PORT, () => {
    console.log(`server-runer at ${PORT}`)
})