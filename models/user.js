import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    username: {type: Number, default:null},
    password: {type: String, default:null},
    job_applied : {
        id: {type: String, default:0},
        company: {type: String, default:null},
        role: {type: String, default:null},
        accepted: {type: String, default:null},
        rejected: {type: String, default:null}
    }
})

export default mongoose.model("User", user)