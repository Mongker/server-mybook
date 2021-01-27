/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
const Boolean = mongoose.Schema.Types.Boolean;

let Cart = new Schema({
    catalog_id: {
        type: String,
        required: true,
        default: ''
    },
    product_id: {
        type: String,
        required: true,
        default: '',
    },
    // True thì sẽ được chuyển đến giao hàng
    status: {
        type: Boolean,
        required: true,
        default: false,
    },
    user_id: {
        type: String,
        required: true,
        default: '',
    },
    amount: {
        type: Number,
        required: true,
        default: 1,
    },
    created: {
        type: Date,
        required: true,
        default: new Date().getTime()
    }
}, {
    collection: 'cart'
});

module.exports = mongoose.model('Cart', Cart);
