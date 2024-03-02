import { Author } from "@/components/author";
import { Footer } from "@/components/footer";
import { FreeChapters } from "@/components/free-chapters";
import Hero from "@/components/hero";
import { Introduction } from "@/components/introduction";
import { Pricing } from "@/components/pricing";
import TableOfContents from "@/components/table-of-contents";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <TableOfContents />
      <FreeChapters />
      <Testimonials />
      <Pricing />
      <Author />
      <Footer />
    </main>
  );
}
