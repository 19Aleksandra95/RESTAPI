const express = require('express')
const router = express.Router();
const jsonParser = express.json();
const controllers = require('../../services/controllers');
const isValidId = require('../../services/isValidId');
const {register} = require('../../services/auth')



router.get('/', controllers.getAll)

router.get('/:id', isValidId, controllers.getById)

router.post('/', jsonParser, register, controllers.add)

router.delete('/:id',isValidId, controllers.deleteById)

router.put('/:id', jsonParser ,isValidId, controllers.put)

router.patch('/:id/favorite', jsonParser, isValidId, controllers.changeFavorite)

module.exports = router;