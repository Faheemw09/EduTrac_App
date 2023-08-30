const express=require("express")
const { ModelInstructor } = require("../Models/instructorModel")
const app=express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const  instructorRoutes=express.Router()

instructorRoutes.get("/",async(req,res)=>{
    res.send("welcome to homepage")
})

instructorRoutes.post("/register", async (req, res) => {
    const { name, gender, dateofbirth, department, email, contactnumber, password } = req.body;

    try {
      
        const existingInstructor = await ModelInstructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({ message: "Email already registered" });
        }

       
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ message: "Error hashing password" });
            }

            const newInstructor = new ModelInstructor({
                name,
                gender,
                dateofbirth,
                department,
                email,
                contactnumber,
                password: hash,
            });

            
                await newInstructor.save();
                res.status(201).json({ message: "Instructor has been registered" });
           
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




instructorRoutes.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    
    try {
        const user = await ModelInstructor.findOne({ email });
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    
                    const token = jwt.sign({ authorID: user._id, author: user.name }, 'masai');

                    res.status(200).send({ "msg": "Login successful", "token": token });
                } else {
                    res.status(200).send({ "msg": "Wrong credentials" });
                }
            });
        } else {
            res.status(200).send({ "msg": "Wrong credentials" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
});


module.exports={
    instructorRoutes
}