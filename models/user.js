import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    email: {type: String, default:null}
})

export default mongoose.model("User", user)