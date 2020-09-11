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
    GET: function (req, res) {
        Catalog.find(function (err, data) {
            if (err) return res.status(404).json({ message: err })
            else return res.status(200).json(data);
        })
    },
    POST: function (req, res) {
        console.log(now);
        // req.body.created = now;
        const catalog = new Catalog(req.body).save().then((catalog) => { res.json({ message: 'successfully' }) }).catch((err) => { res.status(500).json({ message: 'error' }) })
    },
    DELETE: function (req, res) {
        Catalog.findByIdAndRemove({_id: req.params.id}, function(err, catalog){
            if(err) res.json(err);
            else res.json({ message: 'Successfully removed'});
        });
    },
    UPDATE: function (req, res) {
        Catalog.findById(req.params.id, function(err, catalog) {
            if (!catalog)
                res.status(404).send("data is not found");
            else {
                catalog.name = req.body.name;
                catalog.description = req.body.description;
                catalog.hasProducts = req.body.hasProducts;
                catalog.amount = req.body.amount;
                catalog.created = now;
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
}