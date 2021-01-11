/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');

//controller
const { ADD, GET_URL } = require('../controller/url.controller');

// const
const productRouter = express.Router();

productRouter.route('/api/url').post(ADD);
productRouter.route('/api/url/:id').get(GET_URL);
module.exports = productRouter;
