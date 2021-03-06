var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise

dotenv.load({ path: '.env.' + process.env.NODE_ENV})
mongoose.connect(process.env.MONGO_URI)

// console.log('the environment is on ' + process.env.NODE_ENV)
// if ( process.env.NODE_ENV === 'production') {
//   mongoose.connect('mongodb://kadenphua:s8911202h@ds017185.mlab.com:17185/kaden-test')
// } else { mongoose.connect('mongodb://localhost/donut-shop')
// }
app.set('view engine', 'ejs')
app.use(layout)

// serve static files
app.use(express.static(__dirname + '/public'))

var usersRoutes = require('./routes/users')
var usersAPIRoutes = require('./routes/users_api')

app.use(bodyParser.json()) // to parse ajax json req
app.use(bodyParser.urlencoded({
  extended: true
})) // to parse form submitted data

app.use('/users', usersRoutes)
app.use('/api/users', usersAPIRoutes)

app.listen(process.env.PORT || 3000)
console.log('Server started')
