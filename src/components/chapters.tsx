import { chapters } from "@/lib/data/chapters-data";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export default function Chapters() {
  return (
    <section
      id="chapters"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-4 sm:py-20"
    >
      <Container>
        <SectionHeading number="1">Chapters</SectionHeading>
        <p className="mt-8 text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
          Explore the Depths: Dive into the Comprehensive Content of the Book.
          Everything You Need to Know Awaits!
        </p>
        <p className="mt-4 text-base leading-7 tracking-tight text-slate-700">
          Unlock Your Potential: A Comprehensive Guide to Personal Growth. Dive
          into 12 Engaging Chapters Packed with Insights, Strategies, and
          Actionable Exercises to Transform Your Life!
        </p>
        <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-20 w-full">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="col-span-12 md:col-span-6 relative"
            >
              <span className="text-3xl mb-2 font-bold text-primary">
                {chapter.id.toString().padStart(2, "0")}.
              </span>
              <p className="text-base mt-2 mb-2 font-bold">{chapter.title}</p>
              <p className="text-slate-700 text-base leading-7">
                {chapter.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
