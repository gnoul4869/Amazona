import {} from 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 5050;

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, console.log(`Server is online at http://localhost:${port}`));
