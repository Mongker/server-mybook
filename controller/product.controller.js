/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
// model
const Product = require('../model/product.model');

module.exports = {
    GET: async function (req, res) {
        await Product.find(function (err, data) {
            if (err) return res.status(404).json({ message: err });
            else {
                const objectData = {};
                data.map((item) => {
                    objectData[item._id] = item;
                });
                return res.status(200).json(objectData);
            }
        });
    },
    POST: async function (req, res) {
        console.log(req.body);
        const data = { ...req.body };
        const dataJson = {
            itemIds: ['root'],
            items: {
                root: {
                    date: new Date(),
                    amount: data.amount,
                },
            },
            total: data.amount,
        };
        data.history_amount = dataJson;
        // req.body.created = now;
        const product = await Product(data)
            .save()
            .then((product) => {
                res.json({ message: 'SUCCESS' });
            })
            .catch((err) => {
                res.status(500).json({ message: 'error' });
            });
    },
    DELETE: async function (req, res) {
        await Product.findByIdAndRemove({ _id: req.params.id }, function (err, Product) {
            if (err) res.json(err);
            else res.json({ message: 'SUCCESS' });
        });
    },
    UPDATE: async function (req, res) {
        console.log(req.params.id);
        await Product.findById(req.params.id, function (err, Product) {
            if (!Product) res.status(404).send('data is not found');
            else {
                Product.name = req.body.name;
                Product.catalog_id = req.body.catalog_id;
                Product.description = req.body.description;
                Product.amount = req.body.amount;
                Product.image_link = req.body.image_link;
                Product.price = req.body.price;
                Product.price_ceo = req.body.price_ceo;
                (req.body.hasProducts) && (Product.hasProducts = req.body.hasProducts);
                (req.body.history_amount !== 0) && (Product.history_amount = req.body.history_amount);
                Product.save()
                    .then((business) => {
                        res.status(200).json({ message: 'SUCCESS' });
                    })
                    .catch((err) => {
                        res.status(400).send({ message: 'Failed to update Product' });
                    });
            }
        });
    },
    GET_ID_CATALOG: async function (req, res) {
        console.log(req.params.id);
        await Product.find({ catalog_id: req.params.id }, function (err, product) {
            if (err) return res.status(404).json({ message: err });
            else {
                const objectData = {};
                product.map((item) => {
                    objectData[item._id] = item;
                });
                return res.status(200).json(objectData);
            }
        });
    },
};
