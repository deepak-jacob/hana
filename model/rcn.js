import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const RcnSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Rcn', RcnSchema);
