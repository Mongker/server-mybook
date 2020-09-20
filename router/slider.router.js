/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 19/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');

//controller
const {GET, POST, DELETE, UPDATE} = require('../controller/slider.controller');

// const 
const sliderRouter = express.Router();

sliderRouter.route('/api/slider').get(GET).post(POST);
sliderRouter.route('/api/slider/:id').delete(DELETE).put(UPDATE);
module.exports = sliderRouter;