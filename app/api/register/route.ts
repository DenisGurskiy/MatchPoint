import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    console.log('start register... email: ', email);

    const registerResponse = await fetch(
      "https://sportspace.onrender.com/api/client/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!registerResponse.ok) {
      throw new Error("Failed to register user");
    }

    const registerData = await registerResponse.json();
    const { password } = registerData;

    console.log('continue register... password: ', password);

    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendEmail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!emailResponse.ok) {
      throw new Error("Failed to send email");
    }

    const emailResult = await emailResponse.json();
    return NextResponse.json({ message: emailResult.message });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
