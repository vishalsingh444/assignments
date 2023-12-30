const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;

    await User.create({
        username:username,
        password:password,
    });

    res.status(200).json({
        message: 'User created successfully'
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
        const courses = await Course.find();
        res.json({
            courses
        });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const {username} = req.headers;

    // console.log(courseId);
    await User.updateOne({
        username: username
    },{
        "push":{
            purchasedCourses: courseId
        }
    });

    res.status(200).json({message:"Course purchased successfully"});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const {username} = req.headers;
    const user = await User.findOne({username:username});
    // const {purchasedCourses} = await user.populate("purchasedCourses");

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses
    });
});


module.exports = router




