import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        whatsapp: { type: String, required: true },
        email: { type: String },
        interest: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Form", FormSchema);
