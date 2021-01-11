/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const Url = require('../model/url.model');

module.exports = {
    ADD: async function (req, res) {
        const data = {
            url_compact: req.body.url_compact,
            url: req.body.url,
        };
        console.log(data);

        await Url(data)
            .save()
            .then((url) => {
                res.json({ message: 'SUCCESS' });
            })
            .catch((err) => {
                res.status(500).json({ message: 'error' });
            });
    },
    GET_URL: async function (req, res) {
        console.log('req.params.id', req.params.id);
        await Url.find(function (err, data) {
            if (err) return res.status(404).json({ message: err });
            else {
                return res.status(200).json(data[0]);
            }
        }).where({ url_compact: req.params.id });
        // console.log('dataRes: ', dataRes);
    },
};
