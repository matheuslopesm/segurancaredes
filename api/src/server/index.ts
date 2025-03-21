import express from 'express';
import { makeSignUpController } from "../factories/makeSignUpController"
import { makeSignInController } from "../factories/makeSignInController"
import { makeListLeadsController } from "../factories/makeListLeadsController"
import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware"
import { routeAdapter } from './adapters/routeAdapter';
import { middlewareAdapter } from './adapters/middlewareAdapter';

const app = express();
app.use(express.json());

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.get('/leads',
    middlewareAdapter(makeAuthenticationMiddleware()),
    routeAdapter(makeListLeadsController())
);

app.listen(3001, () => {
    console.log('Server started!')
});
