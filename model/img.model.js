/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 12/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImgEntry = new Schema(
    {
        base64: {
            type: String,
            require: true,
            default: '',
        },
        name: {
            type: String,
            require: true,
            default: '',
        },
        created: {
            type: Date,
            required: true,
            default: new Date().getTime(),
        },
    },
    {
        collection: 'img_entry',
    },
);

module.exports = mongoose.model('img_entry', ImgEntry, 'img_entry');
