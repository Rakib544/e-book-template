import Link from "next/link";
import { Container } from "./container";
import { CheckIcon } from "./icons/check-icon";

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:pb-32 lg:pt-12"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900">
          &quot;Unlock Your Potential&quot; is more than just a book—it&lsquo;s
          your roadmap to unleashing the incredible power within you.
        </p>
        <p className="mt-8 leading-8 text-[17px]">
          In &quot;Unlock Your Potential: A Guide to Personal Growth,&quot;
          renowned life coach and motivational speaker, Emma Smith, shares her
          transformative insights and proven strategies to help you navigate
          life&apos;s challenges, unlock hidden talents, and create a life of
          meaning and fulfillment.
        </p>
        <p className="mt-4 leading-8 text-[17px]">
          Before diving into the pages of this book, perhaps you, like many
          others, believed that personal growth was reserved for a select
          few—that it required monumental effort, endless hours of
          introspection, and an elusive secret formula. But the truth is far
          simpler.
        </p>
        <p className="mt-4 leading-8 text-[17px]">
          In &quot;Unlock Your Potential,&quot; Emma demystifies the journey to
          personal growth, offering practical tools and actionable advice that
          anyone can implement. From cultivating a positive mindset to setting
          achievable goals, from overcoming obstacles to embracing
          authenticity—this book covers it all.
        </p>
        <p className="mt-4 leading-8 text-[17px]">Discover how to:</p>
        <ul className="mt-8 space-y-3">
          {[
            "Develop unwavering self-confidence and self-belief",
            "Set clear, achievable goals and create a roadmap for success",
            "Overcome self-doubt, fear, and limiting beliefs",
            "Cultivate resilience and bounce back from setbacks stronger than ever",
            "Tap into your unique strengths and talents to achieve your dreams",
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4 text-base">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 leading-8 text-[17px]">
          Drawing on years of experience working with clients from all walks of
          life, Emma provides real-world examples, inspiring anecdotes, and
          thought-provoking exercises to guide you on your journey of
          self-discovery. By the end of this book, you&lsquo;ll have the tools,
          the mindset, and the confidence to unlock your full potential and
          create the life you&lsquo;ve always dreamed of.
        </p>
        <p className="mt-4 leading-8 text-[17px]">
          Don&apos;t wait another day to embark on this life-changing journey.
          The power to transform your life is within your reach. Are you ready
          to unlock your potential?
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-primary hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  );
}
