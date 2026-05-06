export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import { sanitizeInput, isValidEmail } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { clientName, clientEmail, clientPhone, projectType, projectTitle, description, features, budget, timeline, techStack, referenceLinks } = body;

    if (!clientName || !clientEmail || !projectType || !projectTitle || !description || !budget || !timeline) {
      return NextResponse.json({ success: false, error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!isValidEmail(clientEmail)) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    await connectToDatabase();

    const order = await Order.create({
      clientName: sanitizeInput(clientName),
      clientEmail: sanitizeInput(clientEmail),
      clientPhone: clientPhone ? sanitizeInput(clientPhone) : undefined,
      projectType,
      projectTitle: sanitizeInput(projectTitle),
      description: sanitizeInput(description),
      features: Array.isArray(features) ? features.map((f: string) => sanitizeInput(f)) : [],
      budget,
      timeline,
      techStack: Array.isArray(techStack) ? techStack.slice(0, 20) : [],
      referenceLinks: Array.isArray(referenceLinks) ? referenceLinks.slice(0, 5).map((l: string) => sanitizeInput(l)) : [],
      ipAddress: req.headers.get("x-forwarded-for") || "unknown",
    });

    return NextResponse.json({
      success: true,
      message: "Order received! We'll review your project and contact you within 48 hours.",
      orderNumber: order.orderNumber,
      orderId: order._id,
    }, { status: 201 });
  } catch (error: unknown) {
    console.error("[Order API Error]:", error);
    return NextResponse.json({ success: false, error: "Failed to process your order. Please try again." }, { status: 500 });
  }
}