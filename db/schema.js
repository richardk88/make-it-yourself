const mongoose = require('mongoose');

const stepSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    video: String,
    createdAt: Date,
    updatedAt: Date
});

const projectSchema = mongoose.Schema({
    name: String,
    materials: [String],
    description: String,
    category: String,
    views: Number,
    image: String,
    createdAt: Date,
    updatedAt: Date,
    steps: [stepSchema]
});

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    projects: [projectSchema]
})

stepSchema.pre('save', (next) => {
    now = new Date();
    this.updatedAt = now;
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

projectSchema.pre('save', (next) => {
    now = new Date();
    this.updatedAt = now;
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

userSchema.pre('save', (next) => {
    now = new Date();
    this.updatedAt = now;
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

const Step = mongoose.model('Step', stepSchema);
const Project = mongoose.model('Project', projectSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Step, Project, User
}