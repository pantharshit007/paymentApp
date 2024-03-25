require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const zod = require('zod');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/userSchema')

async function signup(req, res, next) {
    //validating inputs
    const signupBody = zod.object({
        username: zod.string().email(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string(),
    })

    try {
        const { success } = signupBody.safeParse(req.body);
        if (!success) {
            res.status(411).json({
                success: false,
                msg: 'Email already taken/ Incorrect Inputs'
            })
        }

        const { username, password, firstName, lastName } = req.body;

        //checking if user is already exists in the database
        const isAlreadyExists = await userSchema.findOne({
            username: username
        });

        if (isAlreadyExists) {
            return res.status(411).json({
                success: false,
                msg: "Email already in Use"
            })
        }

        //create a new User in dB
        const newUser = await userSchema.create({
            username,
            password,
            firstName,
            lastName,
        })

        const userId = newUser._id;

        //creating JWT token for the new user
        const token = jwt.sign({
            userId: userId,
        }, JWT_SECRET)

        return res.json({
            success: true,
            msg: "User created successfully",
            token: token,
        })

    } catch (err) {
        console.log("> Error While Creating User: " + err.message)
        return res.status(500).json({
            success: false,
            msg: "> Error While Creating User: " + err.message,

        })
    }
}

async function signin(req, res, next) {
    try {

    } catch (err) {
        console.log("> Error While Creating User: " + err.message)
        return res.status(500).json({
            success: false,
            msg: "" + err.message,

        })
    }
}

async function login(req, res, next) {
    try {

    } catch (err) {
        console.log("> Error While Creating User: " + err.message)
        return res.status(500).json({
            success: false,
            msg: "" + err.message,

        })
    }
}

module.exports = {
    signin,
    signup,
    login,
}