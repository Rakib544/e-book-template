function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-6 w-6 flex-none fill-current stroke-current",
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import clsx from "clsx";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { pricingOptions } from "@/lib/data/pricing-data";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured,
}: {
  name: string;
  price: number;
  description: string;
  href: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12",
        featured && "bg-primary sm:shadow-lg"
      )}
    >
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            "mt-7 text-lg font-semibold tracking-tight",
            featured ? "text-white" : "text-slate-900"
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            "mt-2 text-base leading-8 tracking-tight",
            featured ? "text-white" : "text-slate-600"
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              "text-[1.75rem] leading-tight",
              featured ? "text-blue-200" : "text-slate-500"
            )}
          >
            $
          </span>
          <span
            className={clsx(
              "ml-1 mt-1 text-7xl tracking-tight",
              featured ? "text-white" : "text-slate-900"
            )}
          >
            {price}
          </span>
        </p>
        <ul
          role="list"
          className={clsx(
            "order-last mt-10 flex flex-col gap-y-3 text-sm",
            featured ? "text-white" : "text-slate-900"
          )}
        >
          {features.map((feature: any) => (
            <li key={feature} className="flex">
              <CheckIcon
                className={featured ? "text-white" : "text-slate-600"}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          color={featured ? "white" : "slate"}
          className={buttonVariants({
            variant: featured ? "outline" : "default",
            className: "mt-8",
          })}
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:-scroll-mt-8 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="4">Pricing</SectionHeading>
        <p className="mt-8 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Pick your package
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          “Unlock Your Potential: A Guide to Personal Growth” is available in
          two different packages so you can pick the one that’s right for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-3xl md:px-8 md:pt-16 lg:p-20">
          {pricingOptions.map((pricingOption, index) => (
            <Plan
              key={pricingOption.type}
              name={pricingOption.type}
              description={pricingOption.description}
              price={pricingOption.price}
              href="#"
              featured={index === 1}
              features={pricingOption.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}