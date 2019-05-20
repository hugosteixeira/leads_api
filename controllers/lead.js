var model = require('../models/index')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = {
    async getAll(req, res, next) {
        model.Lead.findAll({})
            .then(leads => res.status(200).json({
                error: false,
                data: leads,

            }))
            .catch(error => res.status(404).json({
                error: true,
                data: [],
                error: error,
            }));
    },
    async create(req, res, next) {
        const {
            primeiroNome,
            ultimoNome,
            email,
            telefone,
            cep,
            origem,
            horario,
            idProduto,
            mensagem,
            cpf,
            cnpj,
            nascimento,
            pontuacao,
            genero,

        } = req.body;
        model.Lead.create({
            primeiroNome: primeiroNome,
            ultimoNome: ultimoNome,
            email: email,
            telefone: telefone,
            cep: cep,
            origem: origem,
            horario: horario,
            idProduto: idProduto,
            mensagem: mensagem,
            cpf: cpf,
            cnpj: cnpj,
            nascimento: nascimento,
            pontuacao: pontuacao,
            genero: genero,
        })
            .then(lead => res.status(201).json({
                error: false,
                data: lead,
                message: 'Created Successfully'
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));

    },
    async getOne(req, res, next) {
        model.Lead.findOne({ where: { id: req.params.id } })
            .then(leads => res.status(200).json({
                error: false,
                data: leads,

            }))
            .catch(error => res.status(404).json({
                error: true,
                data: [],
                error: error,
            }));
    },

    async update(req, res, next) {
        const lead_id = req.params.id;
        const {
            primeiroNome,
            ultimoNome,
            email,
            telefone,
            cep,
            origem,
            horario,
            idProduto,
            mensagem,
            cpf,
            cnpj,
            nascimento,
            pontuacao,
            genero,

        } = req.body;

        model.Lead.update({
            primeiroNome: primeiroNome,
            ultimoNome: ultimoNome,
            email: email,
            telefone: telefone,
            cep: cep,
            origem: origem,
            horario: horario,
            idProduto: idProduto,
            mensagem: mensagem,
            cpf: cpf,
            cnpj: cnpj,
            nascimento: nascimento,
            pontuacao: pontuacao,
            genero: genero,
        }, {
                where: {
                    id: lead_id
                }
            })
            .then(Lead => res.json({
                error: false,
                message: 'Lead updated sucsessfully.',
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    },
    async delete(req, res, next) {
        const lead_id = req.params.id;
        model.Lead.destroy({
            where: {
                id: lead_id
            }
        })
            .then(status => res.json({
                error: false,
                message: 'Lead deleted'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    },
    async getByPoints(req, res, next) {
        model.Lead.findAll({ where: { pontuacao: { [Op.gt]: req.params.pontos } } })
            .then(leads => res.status(200).json({
                error: false,
                data: leads,

            }))
            .catch(error => res.status(404).json({
                error: true,
                data: [],
                error: error,
            }));
    },

}