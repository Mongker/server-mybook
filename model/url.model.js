/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Url = new Schema(
  {
    url_compact: {
      type: String,
      require: true,
      default: '',
    },
    url: {
      type: String,
      require: true,
      default: '',
    },
  },
  {
    collection: 'url',
  },
);

module.exports = mongoose.model('Url', Url, 'url');
