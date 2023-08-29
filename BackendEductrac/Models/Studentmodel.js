const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentID: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date },
    major: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String },
}, {
    versionKey: false
});

const ModelStudent = mongoose.model("Student", studentSchema);

module.exports = {
    ModelStudent
};
