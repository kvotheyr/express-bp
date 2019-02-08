const Router = require('express').Router
const router = new Router()
const CafeController = require('./CafeController')

router.post('/', CafeController.create)

module.exports = router