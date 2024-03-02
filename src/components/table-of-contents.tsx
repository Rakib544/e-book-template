import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const tableOfContents = [
  {
    id: 1,
    title: "Discovering Your Inner Strengths",
    subtitle:
      "Uncover your unique talents, strengths, and abilities to harness your full potential and achieve your goals",
  },
  {
    id: 2,
    title: "Cultivating a Growth Mindset",
    subtitle:
      "Learn how to cultivate a growth mindset to embrace challenges, overcome setbacks, and continuously improve.",
  },
  {
    id: 3,
    title: "Setting Powerful Goals",
    subtitle:
      "Master the art of setting clear, achievable goals that align with your values and aspirations for a purpose-driven life.",
  },
  {
    id: 4,
    title: "Conquering Self-Doubt and Fear",
    subtitle:
      "Develop strategies to silence your inner critic, conquer self-doubt, and step boldly into your greatness.",
  },
  {
    id: 5,
    title: "Practicing Self-Compassion",
    subtitle:
      "Embrace self-compassion and learn to treat yourself with kindness, understanding, and acceptance on your journey of self-discovery.",
  },
  {
    id: 6,
    title: "Building Resilience",
    subtitle:
      "Cultivate resilience and bounce back from setbacks stronger than ever, equipped with newfound strength and wisdom.",
  },
  {
    id: 7,
    title: "Embracing Authenticity",
    subtitle:
      "Embrace your authentic self, honor your values, and live a life aligned with your true purpose and passions.",
  },
  {
    id: 8,
    title: "Nurturing Positive Relationships",
    subtitle:
      "Explore the power of positive relationships and learn how to cultivate meaningful connections that support and uplift you.",
  },
  {
    id: 9,
    title: "Practicing Mindfulness and Presence",
    subtitle:
      "Cultivate mindfulness and presence to live in the moment, savor life's experiences, and find peace amidst chaos.",
  },
  {
    id: 10,
    title: "Overcoming Obstacles and Adversity",
    subtitle:
      "Develop resilience strategies to overcome obstacles, navigate adversity, and emerge stronger on the other side.",
  },
  {
    id: 11,
    title: "Celebrating Progress and Success",
    subtitle:
      "Learn to celebrate your progress, acknowledge your achievements, and cultivate a mindset of gratitude and abundance.",
  },
  {
    id: 12,
    title: "Continuing the Journey",
    subtitle:
      "Discover tools, resources, and practices to continue your journey of personal growth and self-discovery beyond the pages of this book.",
  },
];

export default function TableOfContents() {
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
          {tableOfContents.map((content) => (
            <div
              key={content.id}
              className="col-span-12 md:col-span-6 relative"
            >
              <span className="text-3xl mb-2 font-bold text-primary">
                {content.id.toString().padStart(2, "0")}.
              </span>
              <p className="text-base mt-2 mb-2 font-bold">{content.title}</p>
              <p className="text-slate-700 text-base leading-7">
                {content.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
