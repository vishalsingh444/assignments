const jwt = require("jsonwebtoken");

const jwtpassword = "100xdev";


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;

    if(!token){
        return res.status(404).json({message:"Not Authorized - Missing token"});
    }

    jwt.verify(token,jwtpassword,(err,decode)=>{
        if(err){
            return res.status(401).json({messgae:"Invalid token"});
        }
    });

    next();

}

module.exports = adminMiddleware;