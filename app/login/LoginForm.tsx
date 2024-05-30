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

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("This is not a valid email")
    .max(30, {
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign in</Button>
        </form>
      </Form>
      <Link href={"/register"}>{`Don't have an account?`}</Link>
      <Button
        onClick={() => signIn("google")}
        className="border border-black rounded-lg"
      >
        Sign in with Google
      </Button>
      <Button
        onClick={() => signIn("github")}
        className="border border-black rounded-lg"
      >
        Sign in with GitHub
      </Button>
    </>
  );
};
