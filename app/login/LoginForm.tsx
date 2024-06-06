"use client";

import React, { useEffect } from "react";
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
import classNames from "classnames";
import { Modal } from "@/components/ui/modal";
import { SocialButton } from "@/components/ui/socialButton";

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

export const LoginForm: React.FC = () => {
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

    console.log(data);

    if (data.error) {
      toast.error(data.error);
    }

    toast.success("You are Loged in now!");
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col items-center gap-[16px]">
        <h2 className="text-[32px] font-semibold text-gray100Primary">
          Log in to your account
        </h2>
        <p className="">Welcome back! Please enter your details.</p>
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
          <Button type="submit">Log In</Button>
        </form>
      </Form>
      <div className="flex items-center gap-[8px]">
        <div className="w-auto grow border-b-[1px] border-gray20divider"></div>
        <p className="text-[16px] font-normal leading-[1.3em] text-center w-max text-gray50">
          or use one of these options
        </p>
        <div className="w-auto grow border-b-[1px] border-gray20divider"></div>
      </div>
      <SocialButton onClick={() => signIn("google")} variant="google">
        Sign in with Google
      </SocialButton>
      <SocialButton onClick={() => signIn("github")} variant="facebook">
        Sign in with Facebook
      </SocialButton>
      <div className="flex gap-[8px] justify-center text-[16px] leading-[1.3em] text-gray100Primary">
        {`Don't have an account?`}
        <Link href={"/register"}>
          <Button
            variant="greenText"
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
