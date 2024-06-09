"use client";

import { redirect, useRouter } from "next/navigation";

export default function Account() {
  const router = useRouter();
  redirect(`/account/personalInfo`);
}
