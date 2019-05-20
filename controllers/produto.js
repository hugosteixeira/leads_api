var model = require('../models/index')

module.exports = {
    async getAll(req, res, next) {
        model.Produto.findAll({})
            .then(produtos => res.status(200).json({
                error: false,
                data: produtos,

            }))
            .catch(error => res.status(404).json({
                error: true,
                data: [],
                error: error,
            }));
    },
    async create(req, res, next) {
        const {
            name,
            description
        } = req.body;
        model.Produto.create({
            name: name,
            description: description
        })
            .then(produto => res.status(201).json({
                error: false,
                data: produto,
                message: 'Created Successfully'
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));

    },
    async getOne(req, res, next) {
        model.Produto.findAll({ where: { id: req.params.id } })
            .then(produto => res.status(200).json({
                error: false,
                data: produto,

            }))
            .catch(error => res.status(404).json({
                error: true,
                data: [],
                error: error,
            }));
    },

    async update(req, res, next) {
        const produto_id = req.params.id;
        const {
            name,
            description
        } = req.body;

        model.Produto.update({
            name: name,
            description: description
        }, {
                where: {
                    id: produto_id
                }
            })
            .then(Produto => res.json({
                error: false,
                message: 'Produto updated sucsessfully.',
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    },
    async delete(req, res, next) {
        const produto_id = req.params.id;
        model.Produto.destroy({
            where: {
                id: produto_id
            }
        })
            .then(status => res.json({
                error: false,
                message: 'Produto deleted'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    }

}