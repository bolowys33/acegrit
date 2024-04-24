import { model } from "mongoose";
import { models } from "mongoose";

const Post = models.Post || model("Post", postS);