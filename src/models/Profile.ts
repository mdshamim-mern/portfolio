import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    image: { type: String, required: false },
    resume: { type: String, required: false },
    github: { type: String, required: false },
    linkedin: { type: String, required: false },
    facebook: { type: String, required: false },
    heroBio: { type: String, required: false },
    contactBio: { type: String, required: false }
  },
  { timestamps: true }
);

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);