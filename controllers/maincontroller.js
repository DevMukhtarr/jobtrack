import User from "../models/user.js"

// job a user applied for
export const jobApplied = async (req, res) =>{
    const { company, role, } = req.body

    const user = await req.user.user_id

    await User.findByIdAndUpdate(user, {
        $push: {
            job_applied: {
                application:{ 
                    company: company,
                    role: role,
                }
            },
        },
        
    })

    return res.status(200).json({
        status: true,
        message:"Application uploaded successfully"
    })
}

// Companies that acepted a user
export const companyAccepted = async (req, res) =>{
    

}


// Companies that acepted a user
export const companyRejected = async (req, res) =>{
    


}