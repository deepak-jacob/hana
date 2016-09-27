import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RcnSchema   = new Schema({
    mark: String,
    outurn: String,
    nutCount: String,
    quantity: String,
    price: String,
    port: String,
    arrivalDate: Date,
    email: String,
    phone: String,
    company: String,
});

export default mongoose.model('Rcn', RcnSchema);
