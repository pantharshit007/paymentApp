require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken')

async function auth(req, res, next) {
    try {
        const token = req.header("Authorization").split(" ")[1] || req.body.token;

        if (!token || !req.headers.authorization.startswith("Bearer ")) {
            return res.status(401).json({
                success: false,
                msg: 'token missing'
            });
        }

        //token verification
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.userId = decoded.userId;
            next();

        } catch (err) {
            res.status(403).json({
                success: false,
                msg: "Token is invalid: " + err.message
            });
        }

    } catch (err) {
        res.status(403).json({
            success: false,
            msg: "Something went wrong while verifying token: " + err.message
        });
    }
}

module.exports = {
    authMiddleware: auth
}