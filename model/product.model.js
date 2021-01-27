/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 12/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Product = new Schema({
    catalog_id: {
        type: String,
        require: true,
        default: ''
    },
    name: {
        type: String,
        require: true,
        default: ''
    },
    description: {
        type: String,
        require: true,
        default: ''
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    price_seo: {
        type: Number,
        require: true,
        default: 0
    },
    image_link: {
        type: Array,
        require: true,
        default: []
    },
    view_user: {
        type: Number,
        require: true,
        default: 0,
    },
    vote_user: {
        type: Number,
        require: true,
        default: 0,
    },
    has_vote: {
        type: Map,
        require: true,
        default: {
            itemIds: [],
            items: {},
            total: 0,
        },
    },
    has_view: {
        type: Map,
        require: true,
        default: {
            itemIds: [],
            items: {},
            total: 0,
        },
    },
    amount: {
        type: Number,
        require: true,
        default: 0,
    },
    sold: {
        type: Number,
        require: true,
        default: 0,
    },
    history_amount: {
        type: Map,
        require: true,
        default: {
            itemIds: [],
            items: {},
            total: 0,
        },
    }
});
module.exports = mongoose.model('Product', Product, 'product')
