import { model } from "mongoose";
import { models } from "mongoose";


const Admin = models.Admin || model("Admin", adminSchema)
const Attorney = models.Attorney || model("Attorney", attorneySchema);
const Post = models.Post || model("Post", postSchema);