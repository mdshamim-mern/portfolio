import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
    resume: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    facebook: { type: String, required: true },
    bio: { type: String, default: "remoto job high paying badly needed" }
  },
  { timestamps: true }
);

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);