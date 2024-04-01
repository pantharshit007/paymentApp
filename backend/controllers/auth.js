require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User, Account } = require('../models/userSchema')

async function signup(req, res) {
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
            return res.status(411).json({
                success: false,
                msg: 'Email already taken/ Incorrect Inputs'
            })
        }

        const { username, password, firstName, lastName } = req.body;

        //checking if user is already exists in the database
        const isAlreadyExists = await User.findOne({
            username: username
        });

        if (isAlreadyExists) {
            return res.status(411).json({
                success: false,
                msg: "Email already in Use"
            })
        }

        //create a new User in dB
        //////TODO: HASH THE PASSWORD BEFORE ADDING TO DB
        const newUser = await User.create({
            username,
            password,
            firstName,
            lastName,
        })

        const userId = newUser._id;

        //Adding random balance in new Users Account: 1-10,000
        await Account.create({
            userId,
            balance: (1 + Math.random() * 10_000).toFixed(2)
        })

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
            message: "> Error While Creating User: " + err.message,

        })
    }
}

async function signin(req, res) {
    // validating inputs
    const signinBody = zod.object({
        username: zod.string().email(),
        password: zod.string()
    })

    try {
        const { success } = signinBody.safeParse(req.body)
        if (!success) {
            return res.status(411).json({
                success: false,
                message: "> Incorrect inputs"
            })
        }

        const { username, password } = req.body;

        const userExists = await User.findOne({
            username,
            password
        });

        if (userExists) {
            const token = jwt.sign({
                userId: userExists._id
            }, JWT_SECRET)

            return res.status(200).json({
                success: true,
                message: "> Login successfully!",
                token: token,
            })
        }

        throw new Error("Wrong Credentials/ No user Found")

    } catch (err) {
        console.log("> Error While Signing User: " + err.message)
        return res.status(500).json({
            success: false,
            message: "Error: " + err.message,

        })
    }
}

async function login(req, res) {
    try {

    } catch (err) {
        console.log("> Error While Creating User: " + err.message)
        return res.status(411).json({
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