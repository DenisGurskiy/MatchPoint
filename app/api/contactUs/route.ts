import { ContactUs } from "@/app/utils/email.utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, question } = await req.json();

    await ContactUs(name, email, question);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
