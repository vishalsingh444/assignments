const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db");
const jwtpassword = "100xdev";

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;

    const existingUser = await Admin.findOne({username:username});

    if(existingUser){
        return res.status(404).json({message: 'User already exists'});
    }

    await Admin.create(
        username,
        password
    );
    res.status(201).json({message: 'Admin created successfully'});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.headers;

    const existingUser = await Admin.findOne({username:username,password:password});

    if(!existingUser){
        return res.status(404).json({message: 'user does not exists'});
    }

    const token = jwt.sign({username,password},jwtpassword);

    res.status(200).json({
        token
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {
        title,
        description,
        price,
        imageLink
    } = req.body;

    const newCourse = await Course.create(
        title,
        description,
        price,
        imageLink
    );

    res.status(200).json({
        message: 'Course created successfully',
        courseId: newCourse._id
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses
    })
});

module.exports = router;