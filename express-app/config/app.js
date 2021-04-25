import express from 'express';
import router from '../routes/router.js';
import cors from 'cors';
import errorHandlingMiddleware from '../middlewares/errorHandlingMiddlware.js';

const app = express();

// use middleware
app.use(cors({ origin: 'http://localhost:5000',  methods: '*'}));
app.use(express.json());
app.use(router);

app.use(errorHandlingMiddleware);

export default app;