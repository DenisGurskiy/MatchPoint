import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
// import { LoginForm } from "./LoginForm";

const page = async () => {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/");
  // }

  return (
    <section className="container h-screen flex items-center justify-center">
      <div className="w-[800px]">
        {/* <LoginForm /> */}
      </div>
    </section>
  );
};

export default page;
