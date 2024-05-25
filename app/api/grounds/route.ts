import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  let currentGrounds = [
    {
      name: "Adrenalin",
      adress: "Lutsk",
    },
    {
      name: "Olimpiya",
      adress: "Lutsk",
    },
  ];

  if (query) {
    currentGrounds = currentGrounds.filter((ground) =>
      ground.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentGrounds);
}

export async function POST(req: Request) {
  const body = await req.json();
}
