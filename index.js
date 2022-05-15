const express = require('express')
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan')
const PORT = process.env.PORT || 5000 ;
const app = express();
const userRoute = require('./app/routes/User.route')
app.use(helmet())
app.use(morgan('common'))
app.use('/v1/', userRoute)

app.get('/',(req, res, next) => {
    res.send('this is Homes1')
})
app.listen(PORT, () => {
    console.log(`server-runer at ${PORT}`)
})