const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseCode: { type: String, required: true },
    courseName: { type: String, required: true },
    department: { type: String },
    credits: { type: Number },
    description: { type: String },
}, {
    versionKey: false
});

const ModelCourse = mongoose.model("Course", courseSchema);

module.exports = {
    ModelCourse
};
