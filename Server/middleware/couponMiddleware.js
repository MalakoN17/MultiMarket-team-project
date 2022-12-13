const jwt = require('jsonwebtoken');
const OwnerStoreUserSchema = require('../models/ownerStoreUserSchema');

const couponProtect = async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get owner store from the token
            req.user = await OwnerStoreUserSchema.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Owner store not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
}

module.exports = { couponProtect };
