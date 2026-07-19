import mongoose, { Schema, Document } from "mongoose";

export interface IPageView extends Document {
  views: number;
}

const PageViewSchema: Schema = new Schema({
  views: { type: Number, default: 0 },
});

export default mongoose.models.PageView || mongoose.model<IPageView>("PageView", PageViewSchema);