import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const RcnSchema   = new Schema({
    name: String
});

export default mongoose.model('Rcn', RcnSchema);
