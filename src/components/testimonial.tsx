import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/container";
import { StarRating } from "@/components/star-rating";
import { ReactNode } from "react";

export function Testimonial({
  id,
  author,
  children,
}: {
  id: string;
  author: { name: string; image: StaticImageData; role: string };
  children?: ReactNode;
}) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative py-16 sm:py-32 w-full"
    >
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            <StarRating />
          </div>
          <blockquote className="mt-10 font-display text-xl lg:text-2xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-slate-50">
              <Image
                className="h-12 w-12 object-cover"
                src={author.image}
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-slate-600">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}
