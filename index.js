/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

require('dotenv').config();
console.log(process.env.MONGODB_URI);
// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Router
const catalogRouter = require('./router/catalog.router');
const userRouter = require('./router/use.router');
const productRouter = require('./router/product.router');
const sliderRouter = require('./router/slider.router');
const adminRouter = require('./router/admin.router');
const cartRouter = require('./router/cart.router');
const uploadRouter = require('./router/upload.router');
const urlRouter = require('./router/url.router');

// DATA
const url_DBOnline = 'mongodb+srv://mongker:S211199@gmail.com@cluster0.tpvqz.gcp.mongodb.net/mybook?retryWrites=true&w=majority';
const url_DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/myshop';
const port = process.env.PORT || 1999;
mongoose.connect(url_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Database is connected');
    },
    (err) => {
        console.log('Can not connect to the database ' + err);
    },
);
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log('Server is running on Port:', port);
});

// Router
app.use(catalogRouter);
app.use(productRouter);
app.use(sliderRouter);
app.use(adminRouter);
app.use(userRouter);
app.use(cartRouter);
app.use(urlRouter);
app.use('/api/file', uploadRouter);
