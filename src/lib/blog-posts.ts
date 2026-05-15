import type { StaticImageData } from "next/image";
import aboutStudents from "@/assets/about-students.jpg";
import blogCover from "@/assets/blog-cover-1.jpg";
import heroStudent from "@/assets/hero-student.png";
import productEntrance from "@/assets/product-entrance.jpg";
import productStudy from "@/assets/product-study.jpg";
import productTeacher from "@/assets/product-teacher.jpg";

export type BlogPost = {
  slug: string;
  cover: StaticImageData;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "crack-ioe-entrance-in-90-days",
    cover: productEntrance,
    tag: "Guide",
    date: "May 12, 2026",
    title: "How to crack IOE entrance in 90 days",
    excerpt:
      "A focused week-by-week plan that helped hundreds of students tighten the right topics fast.",
    intro:
      "A good 90-day plan is less about cramming everything and more about protecting your time, feedback loops, and confidence. The students who improve fastest usually keep their plan simple enough to repeat.",
    sections: [
      {
        heading: "Build around the paper, not around vibes",
        paragraphs: [
          "Start with the last 10 years of papers and sort topics into three buckets: always asked, sometimes asked, and low-frequency. Your first month should heavily bias the first bucket.",
          "This keeps you from spending two full afternoons on a chapter that feels important but barely moves your score.",
        ],
      },
      {
        heading: "Use mocks as diagnosis",
        paragraphs: [
          "A mock test is not there to flatter you. It should tell you exactly where you panic, where you slow down, and where you make avoidable mistakes.",
          "Reviewing a mock properly often teaches more than taking the mock itself, so schedule both the attempt and the review.",
        ],
      },
      {
        heading: "Protect the last 30 days",
        paragraphs: [
          "The final month should feel repetitive on purpose: timed sections, high-yield revision sheets, and error review.",
          "If your plan changes every three days, your confidence leaks with it. Keep the rhythm stable and let the score climb from consistency.",
        ],
      },
    ],
  },
  {
    slug: "the-25-minute-revision-habit",
    cover: blogCover,
    tag: "Study Tip",
    date: "May 4, 2026",
    title: "The 25-minute revision habit",
    excerpt:
      "Why short daily revision blocks beat heroic weekend catch-up sessions for most students.",
    intro:
      "Students often think revision only counts when it feels intense. In reality, the most effective revision habit is one that returns to the same topic before your memory fully fades.",
    sections: [
      {
        heading: "Shorter sessions lower resistance",
        paragraphs: [
          "A 25-minute block is psychologically easier to begin. That matters because the best study plan is the one you can start even on a tired day.",
          "Once a short block becomes normal, it compounds faster than irregular marathon sessions.",
        ],
      },
      {
        heading: "Revision works best when it is active",
        paragraphs: [
          "Spend those 25 minutes recalling formulas, explaining a chapter out loud, or answering five sharp questions from memory.",
          "Passive rereading feels productive but usually leaves you with the illusion of understanding instead of proof.",
        ],
      },
      {
        heading: "Tie it to a fixed moment",
        paragraphs: [
          "The habit sticks when it is attached to something already stable, like the first 25 minutes after dinner or immediately after school.",
          "Consistency of timing matters more than searching for the perfect mood.",
        ],
      },
    ],
  },
  {
    slug: "from-doti-to-pulchowk",
    cover: aboutStudents,
    tag: "Story",
    date: "April 22, 2026",
    title: "From Doti to Pulchowk: Aakriti's story",
    excerpt:
      "How one student stitched together discipline, past papers, and self-belief without coaching.",
    intro:
      "Aakriti did not have a premium coaching routine or a neat study environment every day. What she had was a reliable system and the patience to keep showing up to it.",
    sections: [
      {
        heading: "She studied from constraints, not ideal conditions",
        paragraphs: [
          "Instead of waiting for perfect resources, she built a repeatable loop using textbooks, question banks, and topic-wise doubt solving.",
          "That shift matters because it turns scarcity into a planning problem instead of an identity problem.",
        ],
      },
      {
        heading: "She treated confusion as part of the process",
        paragraphs: [
          "When a topic felt hard, she kept asking for a re-explanation until it clicked. There was no embarrassment tax attached to being stuck.",
          "That patience is often what separates students who plateau from students who break through.",
        ],
      },
      {
        heading: "She let momentum do the heavy lifting",
        paragraphs: [
          "By the time the exam was close, she was not chasing motivation. She was running on routine, error review, and a deep familiarity with the paper style.",
          "That is the kind of confidence students can build deliberately, not the kind they have to be born with.",
        ],
      },
    ],
  },
  {
    slug: "class-12-physics-chapters-that-matter",
    cover: productStudy,
    tag: "NEB",
    date: "April 11, 2026",
    title: "Class 12 Physics: chapters that actually matter",
    excerpt:
      "A practical way to rank chapters by frequency, scoring potential, and revision speed.",
    intro:
      "Not every chapter deserves equal emotional energy. The smart move is to pair frequency with how quickly you can recover marks from that topic.",
    sections: [
      {
        heading: "Separate high-frequency from high-friction",
        paragraphs: [
          "Some chapters show up often but still remain manageable once you understand their core patterns. These should sit at the front of your plan.",
          "Other chapters consume time aggressively. They may still matter, but they should not quietly swallow the week.",
        ],
      },
      {
        heading: "Keep a formula error log",
        paragraphs: [
          "Physics revision gets dramatically easier when you stop pretending every mistake is unique. Most of them repeat: sign errors, unit slips, formula recall, or missed assumptions.",
          "A compact error log turns revision into targeted repair instead of broad anxiety.",
        ],
      },
      {
        heading: "Revise with retrieval, not just notes",
        paragraphs: [
          "Try solving before rereading. When you cannot start, that is the real revision signal.",
          "The chapter that felt 'done' yesterday may expose gaps quickly when you have to answer cold.",
        ],
      },
    ],
  },
  {
    slug: "why-we-built-a-teacher-ai-clone",
    cover: productTeacher,
    tag: "Teachers",
    date: "March 30, 2026",
    title: "Why we built a Teacher AI clone",
    excerpt:
      "The thinking behind preserving great teaching styles instead of flattening everyone into one generic assistant.",
    intro:
      "Students do not just learn content. They learn through voices they trust, examples that feel familiar, and explanations that match the way they think.",
    sections: [
      {
        heading: "Great teaching has a signature",
        paragraphs: [
          "A strong teacher is rarely defined by facts alone. They have pacing, analogies, and a tone that keeps students from shutting down when a topic gets hard.",
          "We wanted the product to preserve that texture instead of replacing it with bland chatbot language.",
        ],
      },
      {
        heading: "Familiar explanation styles improve confidence",
        paragraphs: [
          "When a student hears an explanation that feels like their favorite teacher, they usually stay engaged longer and ask better follow-up questions.",
          "That trust is part of the educational experience, not a cosmetic detail.",
        ],
      },
      {
        heading: "Scale should not erase human warmth",
        paragraphs: [
          "The point of AI here is not to sound robotic at scale. It is to help more students access the best parts of a teacher's method even when that teacher cannot be everywhere.",
          "That is a different product philosophy from building a generic answer engine.",
        ],
      },
    ],
  },
  {
    slug: "inside-our-doubt-solving-engine",
    cover: heroStudent,
    tag: "Product",
    date: "March 15, 2026",
    title: "Inside our doubt-solving engine",
    excerpt:
      "How we shaped explanations to feel local, patient, and actually useful for Nepali students.",
    intro:
      "A study assistant is only valuable if it responds in a way a student can act on right now. Accuracy matters, but so do tone, language flexibility, and exam relevance.",
    sections: [
      {
        heading: "Local context changes what a good answer looks like",
        paragraphs: [
          "Students do not want a polished general answer that ignores their syllabus. They want an explanation that matches their chapter, their exam, and the language they are comfortable using.",
          "That is why curriculum awareness is a core product requirement rather than a nice extra.",
        ],
      },
      {
        heading: "Re-explanation is a feature, not a failure",
        paragraphs: [
          "The engine is designed to reframe the same concept multiple ways because that is how real tutoring works. One explanation rarely fits every brain on the first pass.",
          "We treat repeated questions as a sign to adapt, not as noise to suppress.",
        ],
      },
      {
        heading: "Useful answers end with a next step",
        paragraphs: [
          "The best study help leaves the student knowing what to do next: solve one example, review a formula, compare two concepts, or test themselves.",
          "That action bias is what turns a clever answer into actual progress.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
