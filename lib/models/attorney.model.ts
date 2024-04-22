import { Schema, model, models } from "mongoose";

const attorneySchema = new Schema({
    name: {
        type: String,
        required: [true, "Attorney name is required"],
    },
    position: {
        type: String,
        required: [true, "Attorney position is required"],
    },
    image_url: {
        type: String,
        required: [true, "Attorney image  is required"],
    },
    image_id: {
        type: String,
    },
});

const Attorney = models.Attorney || model("Attorney", attorneySchema);

export default Attorney;
