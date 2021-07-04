import { addNewClient, getClient } from '../controllers/crmController.js';

const routes = (app) => {
    app.route('/client')
    // route to fetch data from client collection
        .get(getClient)
    // route to post data to client collection
        .post(addNewClient);
}


export default routes;