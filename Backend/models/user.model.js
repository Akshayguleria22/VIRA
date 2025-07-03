import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,  // ensures 1 record per Clerk user
    },
    name: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },
    preferences: {
        theme: { type: String, default: "light" },
        notifications: { type: Boolean, default: true }
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
