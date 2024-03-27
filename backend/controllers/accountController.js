const mongoose = require('mongoose');
const zod = require('zod')

const { Account } = require('../models/userSchema');

async function getBalance(req, res) {
    try {
        const userId = req.userId
        const account = await Account.findOne({ userId: userId });

        // for cases/users where we didn't make a account
        if (!account.balance) {
            // If no account balance found, return 404 Not Found
            console.log("> Balance not found for user ID: " + userId)
            return res.status(404).json({
                success: false,
                message: "Balance not found for user ID: " + userId
            });
        }

        return res.status(200).json({
            success: true,
            msg: 'balance Fetched successfully',
            balance: account.balance
        })

    } catch (err) {
        console.log("> Error while fetching balance" + err.message)
        return res.status(500).json({
            success: false,
            message: "Error while fetching balance" + err.message,
        })
    }
}

//doesn't support Transaction properties
async function transferFunds(req, res) {

    const { amount, to } = req.body;

    // Validate sender and receiver are different accounts
    if (req.userId === to) {
        return res.status(400).json({
            success: false,
            message: "Sender and receiver accounts must be different"
        });
    }

    // sender's Account Fetch
    const fromAccount = await Account.findOne({ userId: req.userId });

    //Min. required balance check 
    if (fromAccount.balance < amount) {
        return res.status(400).json({
            success: false,
            message: "Insufficient balance"
        })
    }

    // receiver's account fetch
    const toAccount = await Account.findOne({ userId: to });

    //check Account existe
    if (!toAccount) {
        return res.status(400).json({
            success: false,
            message: "Invalid account"
        });
    }

    // Transaction of Funds
    await Account.updateOne({ userId: req.userId }, {
        $inc: { balance: -amount }
    });

    await Account.updateOne({ userId: to }, {
        $inc: { balance: amount }
    });

    return res.status(200).json({
        success: true,
        msg: "Transfrer Successful."
    })
}

//TEST run to check conflicts
// transferFunds({
//     userId: "6601e7838c40be81ae16ccfd",
//     body: {
//         to: "66045aa24877982fb1704a19",
//         amount: 100
//     }
// })

// transferFunds({
//     userId: "6601e7838c40be81ae16ccfd",
//     body: {
//         to: "66045aa24877982fb1704a19",
//         amount: 100
//     }
// })

module.exports = {
    getBalance,
    transferFunds,
}