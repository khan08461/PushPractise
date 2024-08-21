const usermodels = require("../models/usermodels")

//creating user and used for post method
exports.createUser = async(req,res)=>{

    const {name,email,phone} = req.body;
    try{
        const userdata = usermodels({name,email,phone})
        await userdata.save();
        res.status(200).json({message: "user created successfully", User:{name, email}})
    } catch (error) {
        res.status(404).json({message:"user not added"})
    }
};
exports.getUser = async (req, res) => {
    try {
        const users = await usermodels.find(); // Fetch all users from the database
        res.status(200).json({ message: "Users fetched successfully", Users: users });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};