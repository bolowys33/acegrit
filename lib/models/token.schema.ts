import { Schema } from "mongoose";

export const tokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    admin_id: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
    expTime: {
        type: Date,
        required: true,
        default: Date.now() + 300000,
    },
});
