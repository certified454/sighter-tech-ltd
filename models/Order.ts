import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrder extends Document {
  orderNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  projectType: string;
  projectTitle: string;
  description: string;
  features: string[];
  budget: string;
  timeline: string;
  techStack?: string[];
  referenceLinks?: string[];
  status: "pending" | "reviewed" | "in-progress" | "completed" | "cancelled";
  priority: "normal" | "urgent" | "critical";
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, unique: true },
    clientName: { type: String, required: true, trim: true, maxlength: 100 },
    clientEmail: { type: String, required: true, trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"] },
    clientPhone: { type: String, trim: true, maxlength: 20 },
    projectType: { type: String, required: true, enum: ["web-app","mobile-app","ai-backend","sports-platform","logistics","dashboard","other"] },
    projectTitle: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, required: true, trim: true, maxlength: 5000 },
    features: { type: [String], default: [] },
    budget: { type: String, required: true, enum: ["under-500k","500k-1m","1m-5m","5m-20m","20m+","discuss"] },
    timeline: { type: String, required: true, enum: ["asap","1-month","2-3-months","3-6-months","6-months+","flexible"] },
    techStack: { type: [String], default: [] },
    referenceLinks: { type: [String], default: [] },
    status: { type: String, enum: ["pending","reviewed","in-progress","completed","cancelled"], default: "pending" },
    priority: { type: String, enum: ["normal","urgent","critical"], default: "normal" },
    ipAddress: String,
  },
  { timestamps: true, collection: "orders" }
);

OrderSchema.pre("save", async function (next) {
  if (!this.orderNumber) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const count = await mongoose.model("Order").countDocuments();
    this.orderNumber = `ST-${year}${month}-${String(count + 1).padStart(4, "0")}`;
  }
  next();
});

OrderSchema.index({ status: 1, createdAt: -1 });
OrderSchema.index({ orderNumber: 1 });

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
export default Order;