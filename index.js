import express from 'express';
import { messagesRouter } from './source/create/create.controller.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

async function main() {
    app.use(express.json());

    app.use('/api/create/', messagesRouter);

    app.all('*', (req, res) => {
        res.status(404).json({message: 'Not found'})
    });

    console.log(process.env.PORT);
    const port = process.env.PORT;

    app.listen(port || 3001, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main();
