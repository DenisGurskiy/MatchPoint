"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SocialButton } from "@/components/ui/socialButton";
import Image from "next/image";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("This is not a valid email")
    .max(300, {
      message: "Email can't be longer than 300 characters",
    }),
  password: z
    .string()
    .min(6, {
      message: "All fields is required",
    })
    .max(30, {
      message: "Password can't be longer than 300 characters",
    }),
});

type Props = {
  setIsActive: (flag: boolean) => void;
  custom: "login" | "signup";
  setCustom: (flag: "login" | "signup") => void;
};

export const LoginForm: React.FC<Props> = ({
  setIsActive,
  custom,
  setCustom,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.error) {
      toast.error(data.error);
    }

    toast.success("You are Loged in now!");
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <div
        className="hidden md:flex justify-end"
        onClick={() => setIsActive(false)}
      >
        <Image
          className="cursor-pointer"
          src="/images/close.png"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div
        className="md:hidden flex justify-start gap-[4px] hover:text-gray50 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => setIsActive(false)}
      >
        <svg
          className="w-[24px] h-[24px]"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="24pt"
          height="24pt"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,24) scale(0.1,-0.1)"
            fill="currentColor"
            stroke="none"
          >
            <path d="M105 160 l-39 -40 39 -40 c21 -22 44 -40 49 -40 6 0 -8 18 -29 40 l-39 40 39 40 c21 22 35 40 29 40 -5 0 -28 -18 -49 -40z" />
          </g>
        </svg>
        <Button className="" variant="mobileTinyText">
          Back
        </Button>
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <h2 className="md:text-[32px] text-[22px] font-semibold text-gray100Primary">
          {custom === "login" ? `Log in to your account` : `Create an account`}
        </h2>
        <p className="text-center text-[16px] leading-[1.3em] font-normal text-gray50">
          {custom === "login"
            ? `Welcome back! Please enter your details`
            : `Please enter your details`}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[16px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {custom === "login" && (
            <div className="flex flex-col">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="self-end mt-[8px] leading-[1.3em]"
                variant="greenText"
              >
                Forgot password?
              </Button>
            </div>
          )}
          <Button type="submit">
            {custom === "login" ? `Log In` : `Get started`}
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-[8px]">
        <div className="w-auto grow border-b-[1px] border-gray20divider"></div>
        <p className="text-[16px] font-normal leading-[1.3em] text-center w-max text-gray50">
          or use one of these options
        </p>
        <div className="w-auto grow border-b-[1px] border-gray20divider"></div>
      </div>
      <div className="flex gap-[16px] md:flex-col">
        <SocialButton onClick={() => signIn("google")} variant="google">
          Sign In With Google
        </SocialButton>
        <SocialButton onClick={() => signIn("github")} variant="facebook">
          Sign In With Facebook
        </SocialButton>
      </div>
      <div className="flex gap-[8px] justify-center items-center text-[16px] leading-[1.3em] text-gray100Primary">
        {custom === "login" ? (
          <>
            <p>{`Don't have an account?`}</p>
            <div
              onClick={() => {
                setCustom("signup");
              }}
            >
              <Button variant="greenText">Sign Up</Button>
            </div>
          </>
        ) : (
          <>
            <p>{`Already have an account?`}</p>
            <div
              onClick={() => {
                setCustom("login");
              }}
            >
              <Button variant="greenText">Log In</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
