import mongoose from 'mongoose';
import {ClientSchema} from '../models/crmModel.js'


const Client = mongoose.model('Client', ClientSchema);

export const addNewClient = (req, res) => {
    let newClient = new Client(req.body);

    newClient.save((err, client) => {
        if(err) {
            res.send(err)
        }
        res.json(client)
    })
}
export const getClient = (req, res) => {
 
  Client.find({}, (err, client) => {
        if(err) {
            res.send(err)
        }
        res.json(client)
    })
}

