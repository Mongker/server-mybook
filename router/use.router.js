/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 06/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 25/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');
const UserRouter = express.Router();

// container
const {GET, POST, DELETE, UPDATE, GET_ID, LOGIN} = require('../controller/user.controller');

UserRouter.route('/api/user').get(GET).post(POST);
UserRouter.route('/api/user/login').post(LOGIN);
UserRouter.route('/api/user/:id').get(GET_ID).delete(DELETE).put(UPDATE);

module.exports = UserRouter;
