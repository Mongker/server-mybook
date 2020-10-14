/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 10/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// model
const Catalog = require('../model/catalog.model');

const date = new Date();
const now = date.toString();

module.exports = {
    GET: async function (req, res) {
        await Catalog.find(function (err, data) {
            if (err) return res.status(404).json({ message: err })
            else {
                const objectData = {};
                data.map((item)=> {
                    objectData[item._id] = item;
                });
                console.log(objectData);
                return res.status(200).json(objectData)
            };
        })
    },
    POST:async function (req, res) {
        // req.body.created = now;
       await Catalog(req.body).save().then((catalog) => { res.json({ message: 'successfully' }) }).catch((err) => { res.status(500).json({ message: 'error' }) })
    },
    DELETE:async function (req, res) {
        await Catalog.findByIdAndRemove({_id: req.params.id}, function(err, catalog){
            if(err) res.json(err);
            else res.json({ message: 'Successfully removed'});
        });
    },
    UPDATE:async function (req, res) {
        await Catalog.findById(req.params.id, function(err, catalog) {
            if (!catalog)
                res.status(404).send("data is not found");
            else {
                catalog.name = req.body.name;
                catalog.description = req.body.description;
                catalog.hasProducts = req.body.hasProducts;
                catalog.amount = req.body.amount;
                console.log(catalog);
                catalog.save().then(business => {
                    res.json({ message: 'Successfully update'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update catalog'});
                    });
            }
        });
    }
};
