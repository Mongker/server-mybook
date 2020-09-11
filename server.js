/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 1999;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');

const catalogRouter = require('./router/catalog.router');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});

// Router
// app.use(userRouter);
app.use(catalogRouter);
