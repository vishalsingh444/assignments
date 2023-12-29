const {User} = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username} = req.headers;
    const {password} = req.headers;

    const existingUser = await User.findOne({username:username,password:password});

    if(!existingUser){
        res.status(404).json({
            message:"Not Authorized"
        });
        return;
    }

    next();
}

module.exports = userMiddleware;