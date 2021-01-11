/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mongker 13/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');

//controller
const { GET_ID_CATALOG, GET, POST, DELETE, UPDATE } = require('../controller/product.controller');

// const
const productRouter = express.Router();

productRouter.route('/api/product').get(GET).post(POST);
productRouter.route('/api/product/:id').delete(DELETE).put(UPDATE).get(GET_ID_CATALOG);
module.exports = productRouter;
