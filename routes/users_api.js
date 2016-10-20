var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.get('/', function (req, res) {
  User.find({}, function (err, allUsers) {
    res.json(allUsers)
  })
})
router.get('/:id', function (req, res) {
  User.findOne({'_id': req.params.id}, function (err, user) {
    if (err) return res.send(err)
    res.json(user)
  })
})

router.post('/', function (req, res) {
  User.create(req.body.user, function (err, newUser) {
    res.json(newUser)
  })
})

module.exports = router
