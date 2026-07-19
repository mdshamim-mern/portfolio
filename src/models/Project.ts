import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    overview: { type: String, required: true }, 
    keyFeatures: { type: [String], required: true }, 
    clientCore: { type: String, required: true },
    serverLogic: { type: String, required: true },
    techStack: { type: [String], required: true },
    livePreview: { type: String, required: true },
    repository: { type: String, required: true },
    images: { type: [String], required: true }, 
    demoEmail: { type: String }, 
    demoPassword: { type: String },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);
export default Project;