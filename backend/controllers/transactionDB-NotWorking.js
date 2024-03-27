const { Account } = require('../models/userSchema');

async function transferFunds(req, res) {

    //Session started
    const session = await mongoose.startSession()
    const { amount, to } = req.body;

    // Validate sender and receiver are different accounts
    if (req.userId === to) {
        await session.abortTransaction();
        return res.status(400).json({
            success: false,
            message: "Sender and receiver accounts must be different"
        });
    }

    // sender's Account Fetch
    const fromAccount = await Account.findOne({ userId: req.userId }).session(session);

    //Min. required balance check 
    if (fromAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            success: false,
            message: "Insufficient balance"
        })
    }

    // receiver's account fetch
    const toAccount = await Account.findOne({ userId: to }).session(session);

    //check Account existe
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            success: false,
            message: "Invalid account"
        });
    }

    // Transaction of Funds
    await Account.updateOne({ userId: req.userId }, {
        $inc: { balance: -amount }
    }).session(session);

    await Account.updateOne({ userId: to }, {
        $inc: { balance: amount }
    }).session(session);

    //commit all transactions
    await session.commitTransaction();

    return res.status(200).json({
        success: true,
        msg: "Transfrer Successful."
    })
}

// Error:
// https://stackoverflow.com/questions/51461952/mongodb-v4-0-transaction-mongoerror-transaction-numbers-are-only-allowed-on-a/72916178#72916178

module.exports = {
    transferFunds,
}