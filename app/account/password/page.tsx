"use client";

import { ChangeEvent, useState } from "react";
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
import { Loader } from "@/components/ui/loader";

const formSchema = z.object({
  old_password: z.string().min(1, "Old password is required"),
  new_password: z
    .string()
    .min(8, "New password must be at least 8 characters long")
    .regex(/[a-zA-Z]/, "New password must contain at least one letter")
    .regex(/\d/, "New password must contain at least one digit"),
});

export default function Password() {
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState<{ [key: string]: string[] }>(
    {}
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setServerErrors({});
    const token = localStorage.getItem("access_token");

    console.log("values...", values);
    try {
      const response = await fetch(
        "https://sportspace.onrender.com/api/client/me/password/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();

      console.log("data...", data);

      if (!response.ok) {
        if (data) {
          setServerErrors(data);
        } else if (data.error) {
          toast.error(data.error);
        }
        return;
      }

      toast.success("Your password has been changed!");
      form.reset();
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Failed to save data. Please try again.");
    } finally {
      setLoading(false);
    }
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
              name="old_password"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Old password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your old password"
                      {...field}
                      type="password"
                      className={
                        form.formState.errors.old_password
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.old_password?.message ||
                      (serverErrors.old_password &&
                        serverErrors.old_password.join(", "))}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter minimum 8 characters"
                      {...field}
                      type="password"
                      className={
                        form.formState.errors.new_password
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.new_password?.message ||
                      (serverErrors.new_password &&
                        serverErrors.new_password.join(", "))}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              className="md:col-span-2 md:col-end-7 col-span-full"
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? <Loader /> : `Save`}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
