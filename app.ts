import express from 'express';
import dotenv from 'dotenv';
import * as routes from './app/routes' ;

dotenv.config();
const port = process.env.PORT || 3009;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes.usersRoute);
app.use('/api', routes.transactionsRoute);
app.use('/api', routes.merchantRoute);
app.use('/api', routes.userStatsRoute);
app.use('/', (req, res) => res.send("Home Page"));

app.listen(port).on('listening', () => {
  console.log(`🚀 are live on ${port}`);
});

export default app;
