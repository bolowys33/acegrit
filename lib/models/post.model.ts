import { Schema } from "mongoose";


const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Post title is required"],
    },
    content: {
        type: String,
        required: [true, "Post content is required"]
    },
    
})