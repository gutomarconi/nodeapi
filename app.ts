import express from 'express';
import dotenv from 'dotenv';
import { usersRoute, transactionsRoute, merchantRoute, userStatsRoute } from './app/routes' ;

dotenv.config();
const port = process.env.PORT || 3009;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', usersRoute);
app.use('/api', transactionsRoute);
app.use('/api', merchantRoute);
app.use('/api', userStatsRoute);
app.use('/', (req, res) => res.send("Home Page"));

app.listen(port).on('listening', () => {
  console.log(`🚀 are live on ${port}`);
});

export default app;
