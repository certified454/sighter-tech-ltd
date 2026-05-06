export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { sanitizeInput, isValidEmail } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message, serviceInterest, budget } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Name, email, subject, and message are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    await connectToDatabase();

    const inquiry = await Inquiry.create({
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      serviceInterest: serviceInterest || "other",
      budget: budget || "discuss",
      ipAddress: req.headers.get("x-forwarded-for") || "unknown",
      userAgent: req.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. We'll be in touch within 24 hours.",
      inquiryId: inquiry._id,
    }, { status: 201 });
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again or reach us on WhatsApp." }, { status: 500 });
  }
}