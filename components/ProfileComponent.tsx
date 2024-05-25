"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export const ProfileComponent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>...</p>;
  }

  return <>{session && <h2>Welcome, {session.user?.name}!</h2>}</>;
};
