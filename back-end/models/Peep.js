import mongoose from 'mongoose'


const peepSchema = new mongoose.Schema({
    peepMessage: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    peeperUsername: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    }
    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
    // needs more stuff to connect to db
})
const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep
//export default mongoose.model('Peep', peepSchema)