import './config';
import 'express-async-errors';
import express, { Express } from 'express';
import { registerUser, logIn, getAllUsers, updateUserEmail } from './controllers/UserController';

const app: Express = express();
app.use(express.json());

const { PORT } = process.env;

app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account
app.get('/api/users', getAllUsers); // get all users' data
app.post('/api/users/:userId', updateUserEmail); // update user's email

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
