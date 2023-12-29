const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Admin = require("../db").Admin;
const Course = require("../db").Course

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;

    await Admin.create({
        username: username,
        password: password
    });
    res.json({
        message: 'Admin created successfully'
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = req.body;

    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink:imageLink
    });
    res.status(200).json({
        message: "Course created Successfully",
        courseId: newCourse._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses
    });
});

module.exports = router;