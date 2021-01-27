/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// model
const User = require('../model/user.model');

module.exports = {
    GET: async function (req, res) {
        await User.find(function (err, data) {
            if (err) return res.status(404).json({message: err})
            else {
                const objectData = {};
                data.map((item) => {
                    objectData[item._id] = {
                        "_id": item.id,
                        "name": item.name,
                        "email": item.email,
                        "phone": item.phone,
                        "rank": item.rank,
                        "address": item.address,
                    };
                });
                return res.status(200).json(objectData)
            }
        })
    },
    POST: async function (req, res) {
        console.log(req.body);
        await User.find({email: req.body.email}, function (err, user) {
            if (err) return res.status(404).json({message: err});
            else if(user.length === 1) {
                return res.status(200).json({message: 'Đã có tài khoản này'})
            } else {
                User(req.body).save().then((User) => {
                    res.json({message: 'SUCCESS'})
                }).catch((err) => {
                    res.status(500).json({message: err})
                })
            }
        });
    },
    DELETE: async function (req, res) {
        await User.findByIdAndRemove({_id: req.params.id}, function (err, catalog) {
            if (err) res.json(err);
            else res.json({message: 'SUCCESS'});
        });
    },
    GET_ID: async function (req, res) {
        await User.findById({_id: req.params.id}, function (err, User) {
            if (err) return res.status(404).json({message: err});
            else return res.status(200).json(User);
        });
    },
    UPDATE: async function (req, res) {
        console.log('Mong'+req.params.id);
        await User.findById(req.params.id, function (err, User) {
            if (!User)
                res.status(404).send("data is not found");
            else {
                console.log(req.body);
                req.body.position && (User.position = req.body.position);
                req.body.status && (User.status = req.body.status);
                req.body.phone && (User.phone = req.body.phone);
                req.body.avatar && (User.avatar = req.body.avatar);
                req.body.email && (User.email = req.body.email);
                req.body.name && (User.name = req.body.name);
                (req.body.password) && (User.password = req.body.password);
                console.log(User);
                User.save().then(business => {
                    res.json({message: 'SUCCESS'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update catalog'});
                    });
            }
        });
    },
    LOGIN: async function (req, res) {
        console.log(req.body);
        await User.find({'email': req.body.email}, function (err, data) {
            if (err) return res.status(404).json({message: err});
            else if (data.length === 1 && req.body.email === data[0].email && req.body.password === data[0].password) {
                return res.status(200).json({message: 'SUCCESS', ...data[0]._doc})
            } else {
                console.log('data', data);
                res.status(404).json({message: 'Wrong password or account'})
            }
        })
    },
};
