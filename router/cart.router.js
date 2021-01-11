/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
const express = require('express');

//controller
const { GET, GET_ID, POST, DELETE, UPDATE } = require('../controller/cart.controller');

// const
const cartRouter = express.Router();

cartRouter.route('/api/cart').get(GET).post(POST).get(GET_ID);
cartRouter.route('/api/cart-user/:id').get(GET_ID);
cartRouter.route('/api/cart/:id').delete(DELETE).put(UPDATE);
module.exports = cartRouter;
