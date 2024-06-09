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
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  birthDay: z
    .string()
    .refine(
      (val) => {
        const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(val);
      },
      { message: "Date must be in format DD/MM/YYYY" }
    )
    .optional(),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "This is not a valid phone number",
    })
    .optional(),
  email: z.string().email("This is not a valid email").optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
});

export default function Personal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/sendQuestion", {
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

    toast.success("Your question has been sent!");
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length >= 2) {
      inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2);
    }
    if (inputValue.length >= 5) {
      inputValue = inputValue.slice(0, 5) + "/" + inputValue.slice(5);
    }
    form.setValue("birthDay", inputValue);
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
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-3 gap-y-[8px] flex flex-col">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      {...field}
                      className={
                        form.formState.errors.firstName
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.firstName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-3 gap-y-[8px] flex flex-col">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter last name"
                      {...field}
                      className={
                        form.formState.errors.lastName
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.lastName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDay"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="DD/MM/YYYY"
                      {...field}
                      pattern="\d{2}/\d{2}/\d{4}" // Регулярний вираз для формату "DD/MM/YYYY"
                      title="Please enter date in format DD/MM/YYYY" // Пояснення для користувача
                      className={
                        form.formState.errors.lastName
                          ? "border-systemRedError"
                          : ""
                      }
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.birthDay?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      className={
                        form.formState.errors.phone
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.phone?.message}
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
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
