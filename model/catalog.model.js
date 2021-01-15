/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author MongLV 12/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Catalog = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        paramId: {
            type: String,
            required: true,
            default: '-1',
        },
        created: {
            type: Date,
            required: true,
            default: new Date().getTime(),
        },
    },
    {
        collection: 'catalog',
    },
);

module.exports = mongoose.model('Catalog', Catalog);
