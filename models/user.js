import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            require: [true, "Please provider user!"],
            unique: true,
            minlength: 4,
        },
        password: {
            type: String,
            trim: true,
            require: [true, "Please provider password!"],
            minlength: 6,
            select: true,
        },
        role: {
            type: String,
            default: "Subscriber",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
