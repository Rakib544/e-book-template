"use client";
import { Container } from "@/components/container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2).max(50),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid email address"),
});

export function FreeChapters() {
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
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-primary sm:scroll-mt-4"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Grab Your Free Preview Now
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-50">
              Experience the Book Before You Buy. Enter Your Email and Receive
              Two Chapters as a Preview.
            </p>
          </div>
          <Form {...form}>
            <form
              className="lg:pl-16 space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h3 className="text-base font-medium tracking-tight text-white">
                Get Your Hands on Two Free Chapters{" "}
                <span aria-hidden="true">&rarr;</span>
              </h3>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter name"
                        className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3 border border-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-blue-200" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter email"
                        className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3 border border-white/20"
                      />
                    </FormControl>
                    <FormMessage className="text-blue-200" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="secondary"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free chapters
              </Button>
            </form>
          </Form>
        </Container>
      </div>
    </section>
  );
}
