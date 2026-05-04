import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceInterest?: string;
  budget?: string;
  status: "new" | "read" | "replied" | "archived";
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"] },
    phone: { type: String, trim: true, maxlength: 20 },
    company: { type: String, trim: true, maxlength: 100 },
    subject: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    serviceInterest: { type: String, enum: ["web-app","mobile-app","ai-integration","sports-analytics","logistics","other"], default: "other" },
    budget: { type: String, enum: ["under-500k","500k-2m","2m-10m","10m+","discuss"], default: "discuss" },
    status: { type: String, enum: ["new","read","replied","archived"], default: "new" },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true, collection: "inquiries" }
);

InquirySchema.index({ status: 1, createdAt: -1 });
InquirySchema.index({ email: 1 });

const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
export default Inquiry;