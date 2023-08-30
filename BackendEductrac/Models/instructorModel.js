const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dateofbirth: { type: Date },
    department: { type: String },
    email: { type: String, required: true },
    contactnumber: { type: String },
    password:{type: String, required: true}
}, {
    versionKey: false
});

const ModelInstructor = mongoose.model("instructor", instructorSchema);

module.exports = {
    ModelInstructor
};
