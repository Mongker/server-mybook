/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// model
const Admin = require('../model/admin.model');

module.exports = {
    GET: async function (req, res) {
        await Admin.find(function (err, data) {
            if (err) return res.status(404).json({message: err})
            else {
                const objectData = {};
                data.map((item) => {
                    objectData[item._id] = {
                        "_id": item.id,
                        "name": item.name,
                        "email": item.email,
                        "position": item.position,
                        "avatar": item.avatar,
                        "phone": item.phone,
                        "info": item.info,
                        "status": item.status,
                    };
                });
                return res.status(200).json(objectData)
            }
        })
    },
    POST: async function (req, res) {
        await Admin.find({email: req.body.email}, function (err, Admin) {
            if (err) return res.status(404).json({message: err});
            else if(Admin.length === 1) {
                return res.status(200).json({message: 'Đã có tồn tại'})
            }
        });
        return await Admin(req.body).save().then((admin) => {
            res.json({message: 'SUCCESS'})
        }).catch((err) => {
            res.status(500).json({message: err})
        })
    },
    DELETE: async function (req, res) {
        await Admin.findByIdAndRemove({_id: req.params.id}, function (err, catalog) {
            if (err) res.json(err);
            else res.json({message: 'SUCCESS'});
        });
    },
    GET_ID: async function (req, res) {
        await Admin.findById({_id: req.params.id}, function (err, admin) {
            if (err) return res.status(404).json({message: err});
            else return res.status(200).json(admin);
        });
    },
    UPDATE: async function (req, res) {
        console.log('Mong'+req.params.id);
        await Admin.findById(req.params.id, function (err, admin) {
            if (!admin)
                res.status(404).send("data is not found");
            else {
                console.log(req.body);
                req.body.position && (admin.position = req.body.position);
                req.body.status && (admin.status = req.body.status);
                req.body.phone && (admin.phone = req.body.phone);
                req.body.avatar && (admin.avatar = req.body.avatar);
                req.body.email && (admin.email = req.body.email);
                req.body.name && (admin.name = req.body.name);
                (req.body.password) && (admin.password = req.body.password);
                console.log(admin);
                admin.save().then(business => {
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
        await Admin.find({'email': req.body.email}, function (err, data) {
            if (err) return res.status(405).json({message: err});
            else if (data.length === 1 && req.body.email === data[0].email && req.body.password === data[0].password) {
                return res.status(200).json({message: 'SUCCESS', id_admin: data[0]._id, email: data[0].email, password: data[0].password, avatar: data[0].avatar, name: data[0].name, position: data[0].position})
            } else {
                res.status(404).json({message: 'Wrong password or account'})
            }
        })
    },
};
