const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date },
    department: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String },
}, {
    versionKey: false
});

const ModelInstructor = mongoose.model("Instructor", instructorSchema);

module.exports = {
    ModelInstructor
};
