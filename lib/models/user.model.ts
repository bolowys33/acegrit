import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
        trim: true,
        lowercase: true,
        minlength: [8, "Username must be at least 8 characters long"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Username must be at least 8 characters long"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
