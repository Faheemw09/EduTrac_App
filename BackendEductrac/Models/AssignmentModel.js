const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
}, {
    versionKey: false
});

const ModelAssignment = mongoose.model("Assignment", assignmentSchema);

module.exports = {
    ModelAssignment
};
