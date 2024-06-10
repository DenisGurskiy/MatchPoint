import type { NextApiRequest, NextApiResponse } from "next";

export default function login(req: NextApiRequest, res: NextApiResponse) {
  console.log('API route hit');
  const { email, password } = req.body;

  if (email && password) {
    const token = "dummy-token";
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}
