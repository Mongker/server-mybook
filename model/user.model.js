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
const Boolean = mongoose.Schema.Types.Boolean;
// Define collection and schema for Business
let User = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: '',
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
    rank: {
      type: String,
      required: true,
      default: '0',
    },
    password: {
      type: String,
      required: true,
      default: '',
    },
    address: {
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
    collection: 'user',
  },
);

module.exports = mongoose.model('User', User);
