import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "@/images/author.jpg";
import { testimonials } from "@/lib/data/testimonials-data";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Testimonial } from "./testimonial";

export function Testimonials() {
  return (
    <section
      id="reviews"
      aria-label="User Testimonials"
      className="py-8 sm:py-10 lg:py-16"
    >
      <Container>
        <SectionHeading>Reviews</SectionHeading>
        <p className="mt-8 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Happy Customer Reviews
        </p>
        <p className="mt-4 max-w-xl text-lg leading-8 tracking-tight text-slate-600">
          Early Access Customers&apos; Feedback: Insights from a Small Group
          Ensuring Tailored Content for Your Needs.
        </p>
      </Container>

      <Container className="relative bg-gray-50 rounded-3xl px-4 mt-12 pb-20 lg:pb-4">
        <Carousel
          className="relative w-full lg:w-[95%] mx-auto"
          opts={{
            align: "center",
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Testimonial
                  id={index.toString()}
                  author={{
                    name: testimonial.name,
                    role: testimonial.role,
                    image: image,
                  }}
                >
                  {testimonial.content}
                </Testimonial>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-x-4 items-center">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
