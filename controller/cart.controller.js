/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// model
const Cart = require('../model/cart.model');

module.exports = {
    GET: async function (req, res) {
        await Cart.find(function (err, data) {
            if (err) return res.status(404).json({message: err})
            else {
                const objectData = {};
                data.map((item) => {
                    objectData[item._id] = item;
                });
                console.log(objectData);
                return res.status(200).json(objectData)
            }
        })
    },
    GET_ID: async function (req, res) {
        console.log(req.body);
        await Cart.find({'user_id': req.params.id}, function (err, data) {
            if (err) return res.status(404).json({message: err})
            else {
                const objectData = {};
                data.map((item) => {
                    objectData[item._id] = item;
                });
                console.log(objectData);
                return res.status(200).json(objectData)
            }
        })
    },
    POST: async function (req, res) {
        console.log(req.body);
        // req.body.created = now;
        await Cart.find({'product_id': req.body.product_id}, function (err, data) {
            if (err) return res.status(404).json({message: err})
            else if (data.length === 0) {
                console.log(data.length);
                Cart(req.body).save().then((Cart) => {
                    res.json({message: 'SUCCESS'})
                }).catch((err) => {
                    res.status(500).json({message: 'error'})
                })
            } else res.json({message: 'Đã tồn tại'})
        })
    },
    DELETE: async function (req, res) {
        await Cart.findByIdAndRemove({_id: req.params.id}, function (err, Product) {
            if (err) res.json(err);
            else res.json({message: 'SUCCESS'});
        });
    },
    UPDATE: async function (req, res) {
        await Cart.findById(req.params.id, function (err, Cart) {
            console.log('Mong'+req.params.id);
            if (!Cart)
                res.status(404).send("data is not found");
            else {
                // console.log('mong');
                console.log('--------------------------------------');
                // console.log(req);
                (req.body.amount) && (Cart.amount = req.body.amount);
                // console.log(req.body.status);
                (Cart.status = req.body.status);
                // console.log(Cart);
                Cart.save().then(business => {
                    res.json({message: 'SUCCESS'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update Product'});
                    });
            }
        });
    }
}
