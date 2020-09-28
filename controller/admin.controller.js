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
            if (err) return res.status(404).json({ message: err })
            else {
                const objectData = {};
                data.map((item)=> {
                    objectData[item._id] = {
                        "_id": item.id,
                        "name": item.name,
                        "email": item.email,
                        "position": item.position,
                        "avatar": item.avatar,
                        "phone": item.phone,
                        "info": item.info,
                    };
                });
                return res.status(200).json(objectData)
            }
        })
    },
    POST:async function (req, res) {
        console.log(req.body);
        await Admin(req.body).save().then((admin) => { res.json({ message: 'SUCCESS' }) }).catch((err) => { res.status(500).json({ message: err }) })
    },
    DELETE:async function (req, res) {
        await Admin.findByIdAndRemove({_id: req.params.id}, function(err, catalog){
            if(err) res.json(err);
            else res.json({ message: 'SUCCESS'});
        });
    },
    GET_ID:async function (req, res) {
        await Admin.findById({_id: req.params.id}, function(err, admin){
            if (err) return res.status(404).json({ message: err });
            else return res.status(200).json(admin);
        });
    },
    UPDATE:async function (req, res) {
        await Admin.findById(req.params.id, function(err, admin) {
            if (!catalog)
                res.status(404).send("data is not found");
            else {
                catalog.name = req.body.name;
                catalog.description = req.body.description;
                catalog.hasProducts = req.body.hasProducts;
                catalog.amount = req.body.amount;
                console.log(catalog);
                catalog.save().then(business => {
                    res.json({ message: 'SUCCESS'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update catalog'});
                    });
            }
        });
    }
};
