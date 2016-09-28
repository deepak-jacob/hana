import express from 'express';
import Rcn from '../model/rcn'

const router = express.Router();

router.get('/', (req, res) => {
    Rcn.find((err, rcn) => {
        if (err)
            res.send(err);

        res.json(rcn);
    });
});

router.post('/', (req, res) => {

    var rcn = new Rcn();
    rcn.mark = req.body.mark;
    rcn.outurn = req.body.outurn;
    rcn.nutCount = req.body.nutCount;
    rcn.quantity = req.body.quantity;
    rcn.price = req.body.price;
    rcn.port = req.body.port;
    rcn.arrivalDate = req.body.arrivalDate;
    rcn.email = req.body.email;
    rcn.phone = req.body.phone;
    rcn.company = req.body.company;

    rcn.save((err) => {
        if (err)
            res.send(err);

        res.json({ message: 'Rcn created!' });
    });
});

export default router;
