import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Post title is required"],
    },
    content: {
        type: String,
        required: [true, "Post content is required"],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date_created: {
        Date,
        default: Date.now(),
    },
});

const Post = models.Post || model("Post", postSchema);

export default Post;
