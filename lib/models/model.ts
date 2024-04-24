import { model, models } from "mongoose";
import { adminSchema } from "./admin.schema";
import { attorneySchema } from "./attorney.schema";
import { postSchema } from "./post.schema";

const Admin = models.Admin || model("Admin", adminSchema);
const Attorney = models.Attorney || model("Attorney", attorneySchema);
const Post = models.Post || model("Post", postSchema);

export { Admin, Attorney, Post };
