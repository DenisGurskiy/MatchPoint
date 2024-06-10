"use client";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(50, {
      message: "Name can't be longer than 50 characters",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("This is not a valid email")
    .max(300, {
      message: "Email can't be longer than 300 characters",
    }),
  question: z
    .string()
    .min(1, {
      message: "All fields is required",
    })
    .max(600, {
      message: "Question can't be longer than 600 characters",
    }),
});

export const BlockGetInTouch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const response = await fetch("/api/sendQuestion", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });

    // const data = await response.json();

    // if (data.error) {
    //   toast.error(data.error);
    // }

    toast.success("Your question has been sent!");
    form.setValue("question", "");
  }

  return (
    <section className="ownContainer ownGrid md:my-[60px] my-[32px]">
      <div className="col-span-full flex flex-col gap-y-[24px]">
        <h2 className="col-span-full md:text-[32px] text-[22px] leading-[1.2em] font-semibold text-gray100Primary">
          Get in touch
        </h2>
        <p className="col-span-full text-[16px] font-normal leading-[1.3em] text-gray50">
          Feel free to contact us.
        </p>
      </div>

      <div className="md:col-span-6 col-span-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-full grid grid-cols-6 gap-[24px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>Your full name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter full name"
                      {...field}
                      className={
                        form.formState.errors.name
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
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
              name="question"
              render={({ field }) => (
                <FormItem className="col-span-full gap-y-[8px] flex flex-col">
                  <FormLabel>How we can help you?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your question"
                      {...field}
                      className={
                        form.formState.errors.question
                          ? "border-systemRedError"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.question?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              className="md:col-span-4 col-span-full"
              type="submit"
              variant="primary"
            >
              Send question
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
