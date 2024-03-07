import Image from "next/image";
import Link from "next/link";

import authorImage from "@/images/author.jpg";
import { authorData } from "@/lib/data/author-data";
import { ReactNode } from "react";
import { Container } from "./container";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:-scroll-mt-4 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16"></div>
      <Container size="md">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative w-full text-center">
              <div className="rounded-xl shadow-sm relative z-10 mx-auto h-[300px] w-[200px] origin-bottom-right -rotate-6 transform !border-4 lg:h-[360px] lg:w-[280px] bg-slate-200">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl bg-slate-200"
                  src={authorImage}
                  alt=""
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                />
              </div>
              <div className="rounded-xl absolute right-[25%] -bottom-3 z-0 mx-auto h-[300px] w-[200px] border-4 border-slate-200 bg-primary lg:h-[350px] lg:w-[280px]"></div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-6">
            <SectionHeading number="5">Author</SectionHeading>
            <p className="mt-6 text-2xl lg:text-4xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span className="block text-primary">{authorData.name} –</span>{" "}
              Hey there, I’m the author behind &quot;{authorData.bookName}
              &quot;.
            </p>
            <p className="mt-4 leading-8 text-base text-slate-700">
              {authorData.bio}
            </p>
            <div className="flex gap-x-2 mt-4">
              <SocialLink href={authorData.twitterUrl} title="Twitter">
                <TwitterIcon className="h-5 w-5 fill-current" />
              </SocialLink>
              <SocialLink href={authorData.facebookUrl} title="Facebook">
                <FacebookIcon className="h-5 w-5 fill-current" />
              </SocialLink>
              <SocialLink href={authorData.linkedinUrl} title="Linkedin">
                <LinkedInIcon className="h-5 w-5 fill-current" />
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  children,
  title,
}: {
  href: string;
  children: ReactNode;
  title: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            aria-label={`Visit ${title}`}
            href={href}
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className:
                "text-primary h-12 w-12 rounded-full hover:text-primary",
              size: "icon",
            })}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
