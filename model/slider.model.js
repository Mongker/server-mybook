/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 19/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Slider = new Schema({
    name: {
        type: String,
        require: true,
        default: ''
    },
    image_link: {
        type: String,
        require: true,
        default: ''
    },
    index: {
        type: Number,
        require: true,
        default: 0
    }
}, {
    collection: 'slider'
});
module.exports = mongoose.model('Slider', Slider, 'slider')
