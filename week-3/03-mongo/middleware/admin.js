// Middleware for handling auth
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username} = req.headers;
    const {password} = req.headers;

    const existingUser = await Admin.findOne({username:username,password:password});

    if(!existingUser){
        res.status(404).json({
            message:"Not Authorized"
        });
        return;
    }

    next();

}

module.exports = adminMiddleware;