import Image from "next/image";
import Link from "next/link";

import authorImage from "@/images/author.jpg";
import { ReactNode } from "react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

function TwitterIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
    </svg>
  );
}

function LinkedInIcon(props: any) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
    </svg>
  );
}

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
              <span className="block text-primary">Emma Smith –</span> Hey
              there, I’m the author behind &quot;Unlock Your Potential.&quot;.
            </p>
            <p className="mt-4 leading-8 text-base text-slate-700">
              Emma Smith is a seasoned life coach and motivational speaker
              dedicated to helping individuals unlock their full potential and
              achieve personal growth. With a background in psychology and years
              of experience working with clients from all walks of life, Emma
              offers practical strategies, actionable advice, and inspiring
              insights to empower readers on their journey of self-discovery.
              Her passion for personal growth and commitment to helping others
              live fulfilling lives shine through in every page of &quot;Unlock
              Your Potential.&quot;
            </p>
            <div className="flex gap-x-2 mt-4">
              <SocialLink href="#" title="Facebook">
                <TwitterIcon className="h-5 w-5 fill-current" />
              </SocialLink>
              <SocialLink href="#" title="Facebook">
                <FacebookIcon className="h-5 w-5 fill-current" />
              </SocialLink>
              <SocialLink href="#" title="Facebook">
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
            href={href}
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
