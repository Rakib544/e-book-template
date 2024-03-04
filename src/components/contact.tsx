"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2).max(50),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),
  subject: z
    .string({ required_error: "Subject is required" })
    .min(2, "Subject is required"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-14 pb-8 pt-16 mt-20 lg:mt-0 sm:-scroll-mt-8 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="4">Contact</SectionHeading>
        <p className="mt-8 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Get in touch
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Connect Directly with the Author to Share Your Thoughts, Ask
          Questions, and Start Your Personal Growth Journey Today
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-slate-50 py-20  sm:pb-16 md:rounded-3xl md:pt-16"
          >
            <Container className="space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px]">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter name"
                            className="relative z-10 w-full appearance-none px-4 py-2 text-[15px] focus:outline-none sm:py-3"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px]">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="Enter Email"
                            className="relative z-10 w-full appearance-none px-4 py-2 text-[15px] focus:outline-none sm:py-3"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px]">Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Write your subject"
                        className="relative z-10 w-full appearance-none px-4 py-2 text-[15px] focus:outline-none sm:py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px]">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        {...field}
                        placeholder="Write you message"
                        className="relative z-10 w-full appearance-none px-4 py-2 text-[15px] focus:outline-none sm:py-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <Button size="lg" type="submit">
                  <FlyPlaceIcon className="h-5 w-5 mr-1" /> Send Message
                </Button>
              </div>
            </Container>
          </form>
        </Form>
      </div>
    </section>
  );
}

function FlyPlaceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
    </svg>
  );
}
