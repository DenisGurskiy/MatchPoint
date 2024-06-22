import { sendEmail } from "@/app/utils/email.utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await sendEmail(email, password);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
