/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');
const catalogRouter = express.Router();

// container
const {GET, POST, DELETE, UPDATE, GET_ID} = require('../controller/admin.controller');

catalogRouter.route('/api/admin').get(GET).post(POST);
catalogRouter.route('/api/admin/:id').get(GET_ID).delete(DELETE).put(UPDATE);

module.exports = catalogRouter;
