const zod = require('zod');
const { User } = require('../models/userSchema')

async function userUpdate(req, res) {
    const updateBody = zod.object({
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
        password: zod.string().optional(),
    })
    try {
        const { success } = updateBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                success: false,
                msg: "Wrong user Information"
            })
        }

        // Update based on user's ID (_id)
        await User.updateOne({ _id: req.userId }, req.body);

        return res.status(200).json({
            success: true,
            message: "User Information Updated!"
        })

    } catch (err) {
        console.log("> Error updating user info: " + err.message)
        return res.status(500).json({
            success: false,
            msg: "Error updating user info: " + err.message
        })
    }
}

async function getUserInfo(req, res) {
    try {
        const filter = req.query.filter || '';

        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            },
            {
                lastName: {
                    "$regex": filter
                },
            }]
        })

        return res.status(200).json({
            success: true,
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id,
            }))
        })

    } catch (err) {
        console.log("> Error Fetching user info: " + err.message)
        return res.status(500).json({
            success: false,
            msg: "Error Fetching user info: " + err.message
        })
    }
}


module.exports = {
    userUpdate,
    getUserInfo,
};