import { Author } from "@/components/author";
import { ContactForm } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FreeChapters } from "@/components/free-chapters";
import Hero from "@/components/hero";
import { Introduction } from "@/components/introduction";
import { Pricing } from "@/components/pricing";
import TableOfContents from "@/components/table-of-contents";
import { Testimonials } from "@/components/testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <TableOfContents />
      <Suspense fallback={<p>Free Chapters are loading</p>}>
        <FreeChapters />
      </Suspense>
      <Suspense fallback={<p>Testimonials are loading</p>}>
        <Testimonials />
      </Suspense>
      <Pricing />
      <Author />
      <Suspense fallback={<p>Contact Form are loading</p>}>
        <ContactForm />
      </Suspense>
      <Footer />
    </main>
  );
}
