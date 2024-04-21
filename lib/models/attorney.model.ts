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
    image: {
        type: String,
        required: [true, "Attorney image  is required"],
    },
    image_id: String
});

const Attorney = models.Attorney || model("Attorney", attorneySchema);

export default Attorney;
