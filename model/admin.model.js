/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Boolean = mongoose.Schema.Types.Boolean;
// Define collection and schema for Business
let Admin = new Schema({
    name: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        default: '',
    },
    phone: {
        type: String,
        required: true,
        default: '',
    },
    info: {
        type: String,
        required: true,
        default: '{}',
    },
    password: {
        type: String,
        required: true,
        default: '',
    },
    position: {
        type: String,
        require: true,
        default: ''
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    },
    avatar: {
        type: String,
        required: true,
        default: '',
    },
    created: {
        type: Date,
        required: true,
        default: new Date().getTime()
    }
}, {
    collection: 'admin'
});

module.exports = mongoose.model('Admin', Admin);
