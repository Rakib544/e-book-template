import { Author } from "@/components/author";
import Hero from "@/components/banner";
import Chapters from "@/components/chapters";
import { ContactForm } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FreeChapters } from "@/components/free-chapters";
import { Introduction } from "@/components/introduction";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Chapters />
      {/* <Suspense fallback={<p>Free Chapters are loading</p>}> */}
      <FreeChapters />
      {/* </Suspense> */}
      {/* <Suspense fallback={<p>Testimonials are loading</p>}> */}
      <Testimonials />
      {/* </Suspense> */}
      <Pricing />
      <Author />
      {/* <Suspense fallback={<p>Contact Form are loading</p>}> */}
      <ContactForm />
      {/* </Suspense> */}
      <Footer />
    </main>
  );
}
