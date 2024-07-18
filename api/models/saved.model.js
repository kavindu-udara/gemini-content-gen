import mongoose from "mongoose";

const savedSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    contentId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Saved = mongoose.model('Saved', savedSchema);
export default Saved;