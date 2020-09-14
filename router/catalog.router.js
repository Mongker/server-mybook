/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 10/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');
const catalogRouter = express.Router(); 


// container 
const {GET, POST, DELETE, UPDATE} = require('../controller/catalog.controller')

catalogRouter.route('/api/catalog').get(GET).post(POST);
catalogRouter.route('/api/catalog/:id').delete(DELETE).put(UPDATE);

module.exports = catalogRouter;