"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { SocialButton } from "@/components/ui/socialButton";
import Image from "next/image";
import { useAuth } from "./AuthContext";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email")
    .max(300, { message: "Email can't be longer than 300 characters" }),
  password: z
    .string()
    .min(6, {
      message: "Password is required and must be at least 6 characters long",
    })
    .max(30, { message: "Password can't be longer than 300 characters" }),
});

const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email")
    .max(300, { message: "Email can't be longer than 300 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

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
  const form = useForm<LoginFormValues | SignupFormValues>({
    resolver: zodResolver(custom === "login" ? loginSchema : signupSchema),
    defaultValues: {},
  });

  const { login, signUp } = useAuth();

  async function onSubmit(values: LoginFormValues | SignupFormValues) {
    if (custom === "login") {
      await login(values.email, (values as LoginFormValues).password);
    } else {
      await signUp(values.email);
    }
    setIsActive(false);
  }

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-end" onClick={() => setIsActive(false)}>
        <Image
          className="cursor-pointer"
          src="/images/close.svg"
          alt="logo"
          width={24}
          height={24}
        />
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
            {custom === "login" ? "Log In" : "Get started"}
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
          {custom === "login" ? `Log In ` : `Sign up `}
          With Google
        </SocialButton>
        <SocialButton onClick={() => signIn("github")} variant="facebook">
          {custom === "login" ? `Log In ` : `Sign up `}
          With Facebook
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
