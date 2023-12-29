const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db");
const jwtpassword = "100xdev";
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;

    const existingUser = await User.findOne({username,password});

    if(existingUser){
        return res.status(404).json({
            message: 'Username already exists'
        })
    }

    await User.create(
        username,
        password
    );

    res.status(200).json({
        message:'User created successfully'
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;

    const existingUser = await User.findOne({username,password});

    if(!existingUser){
        return res.status(404).json({
            message: 'User does not exists'
        })
    }

    const token = jwt.sign({username,password},jwtpassword);

    res.status(200).json({
        token
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    const {username} = req.headers;

    const course = await Course.exists({_id:courseId});
    const user = await User.findOne({username});

    const purchasedCourseId = user.purchasedCourses.find(purchasedCourse=>purchasedCourse._id.toString === courseId);

    if(purchasedCourseId){
        res.json({
            message: "Already purchased"
        });
        return;
    }
    user.purchasedCourses.push(course);
    user.save();

    res.status(200).json({
        message: 'course purchased successfully'
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const {username} = req.headers;

    const user = await User.findOne({username});

    const {purchasedCourses} = await user.populate("purchasedCourses");

    res.json({
        purchasedCourses
    });
});

module.exports = router