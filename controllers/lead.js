var model = require('../models/index')
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
            nome,
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
        } = req.body;
        model.Lead.create({
            primeiroNome: nome,
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
        model.Lead.findAll({ where: { id: req.params.id } })
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
            nome,
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
        } = req.body;

        model.Lead.update({
            primeiroNome: nome,
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
        model.Lead.findAll({ where: { pontuacao: { [Op.gt]: res.pontuacao } } })
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