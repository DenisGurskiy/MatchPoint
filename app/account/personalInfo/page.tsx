"use client";

import { ChangeEvent, useEffect, useState } from "react";
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
import { useAuth } from "@/components/AuthContext";
import { Loader } from "@/components/ui/loader";

const formSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  date_of_birth: z
    .string()
    .refine(
      (val) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(val) || val === "";
      },
      { message: "Date must be in format DD/MM/YYYY" }
    )
    .optional(),
  phone_number: z
    .string()
    .regex(/^$|^\+?[1-9]\d{1,14}$/, {
      message: "This is not a valid phone number",
    })
    .optional(),
  email: z.string().email("This is not a valid email").optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
});

export default function Personal() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      date_of_birth: user?.date_of_birth || "",
      phone_number: user?.phone_number || "",
      email: user?.email || "",
      gender: user?.gender || undefined,
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        date_of_birth: user?.date_of_birth || "",
        phone_number: user?.phone_number || "",
        email: user?.email || "",
        gender: user?.gender || undefined,
      });
    }
  }, [user, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const token = localStorage.getItem("access_token");
    try {
      const userData = await fetch(
        "https://sportspace.onrender.com/api/client/me/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      );

      const data = await userData.json();

      if (userData.ok) {
        setUser({
          ...data,
        });
        toast.success("Data is saved!");
      } else {
        toast.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Failed to save data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length >= 4) {
      inputValue = inputValue.slice(0, 4) + "-" + inputValue.slice(4);
    }
    if (inputValue.length >= 7) {
      inputValue = inputValue.slice(0, 7) + "-" + inputValue.slice(7);
    }
    form.setValue("date_of_birth", inputValue);
  };

  return (
    <section className="col-span-full md:col-span-6 md:grid md:grid-cols-6 flex flex-col gap-[16px]">
      <h3 className="text-[16px] md:text-[32px] md:leading-[1.2em] font-semibold leading-[1.3em] text-gray100Primary] md:col-span-full">
        Personal info
      </h3>
      <div className="col-span-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-full grid grid-cols-2 md:grid-cols-6 gap-y-[24px] gap-x-[16px]"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-3 gap-y-[8px] flex flex-col">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      {...field}
                      className={
                        form.formState.errors.first_name
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.first_name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-3 gap-y-[8px] flex flex-col">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter last name"
                      {...field}
                      className={
                        form.formState.errors.last_name
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.last_name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="YYYY-MM-DD"
                      {...field}
                      pattern="\d{4}-\d{2}-\d{2}"
                      title="Please enter date in format YYYY-MM-DD"
                      className={
                        form.formState.errors.last_name
                          ? "border-systemRedError"
                          : ""
                      }
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.date_of_birth?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      className={
                        form.formState.errors.phone_number
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.phone_number?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      {...field}
                      readOnly={true}
                      className={
                        form.formState.errors.email
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Select your gender</FormLabel>
                  <FormControl>
                    <div className="flex gap-[24px]">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value="male"
                          checked={field.value === "male"}
                          onChange={field.onChange}
                          className="hidden"
                        />
                        <span
                          className={`inline-block w-[24px] h-[24px]  border-gray30Disabled rounded-full bg-white flex-shrink-0 ${
                            field.value === "male"
                              ? "border-primaryGreen100 border-[7px]"
                              : "border-[1.5px]"
                          }`}
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value="female"
                          checked={field.value === "female"}
                          onChange={field.onChange}
                          className="hidden"
                        />
                        <span
                          className={`inline-block w-[24px] h-[24px]  border-gray30Disabled rounded-full bg-white flex-shrink-0 ${
                            field.value === "female"
                              ? "border-primaryGreen100 border-[7px]"
                              : "border-[1.5px]"
                          }`}
                        />
                        <span className="ml-2">Female</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value="other"
                          checked={field.value === "other"}
                          onChange={field.onChange}
                          className="hidden"
                        />
                        <span
                          className={`inline-block w-[24px] h-[24px]  border-gray30Disabled rounded-full bg-white flex-shrink-0 ${
                            field.value === "other"
                              ? "border-primaryGreen100 border-[7px]"
                              : "border-[1.5px]"
                          }`}
                        />
                        <span className="ml-2">Other</span>
                      </label>
                    </div>
                  </FormControl>
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
