const mongoose = require('mongoose');

//Models
const User = mongoose.model('User', UserSchema);
const course = mongoose.model('Course', CourseSchema);

//Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    price: 59999
});

//Create 
User.create({
    username: requestAnimationFrame.body.username,
    password: requestAnimationFrame.body.password
});

// Read/find/Updates
User.findById("1");
User.findOne({
    userName:"harsimrankour48@gmail.com"
})
User.find({
    username: "harsimran@gmail.com"
})

User.updateOne(
    {"id": "1"},
    { $push: {purchasedCourses:courseId}}
)

// Delete
User.deleteMany({})

User.deleteOne({
    username:"harsimran@gmail.com"
})