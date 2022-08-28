import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    username: {type: String, default:null},
    password: {type: String, default:null},
    job_applied : [{
        application: {
            company: {type: String, default:null},
            role: {type: String, default:null},
            accepted: {type: String, default:null},
            rejected: {type: String, default:null}
    }
}]
})

export default mongoose.model("User", user)