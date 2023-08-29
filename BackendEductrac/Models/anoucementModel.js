const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    publishDate: { type: Date },
    associatedEntity: { type: String }, 
}, {
    versionKey: false
});

const ModelAnnouncement = mongoose.model("Announcement", announcementSchema);

module.exports = {
    ModelAnnouncement
};
