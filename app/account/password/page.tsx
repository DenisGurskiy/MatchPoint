"use client";

import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  password: z.string(),
  passwordConfirm: z.string(),
});

export default function Password() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/changePassword", {
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

    toast.success("Your password has been changed!");
  }

  return (
    <section className="col-span-full md:col-span-6 md:grid md:grid-cols-6 flex flex-col gap-[16px]">
      <h3 className="text-[16px] md:text-[32px] md:leading-[1.2em] font-semibold leading-[1.3em] text-gray100Primary] md:col-span-full">
        Password
      </h3>
      <div className="col-span-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-full grid grid-cols-2 md:grid-cols-6 gap-y-[24px] gap-x-[16px]"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Old password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your old password"
                      {...field}
                      className={
                        form.formState.errors.password 
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter minimum 8 characters"
                      {...field}
                      className={
                        form.formState.errors.passwordConfirm
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.passwordConfirm?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              className="md:col-span-2 md:col-end-7 col-span-full"
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
