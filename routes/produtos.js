var express = require('express');
var router = express.Router();
let controller = require('../controllers/produto')

/* GET todo listing. */
router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/create', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
module.exports = router;
