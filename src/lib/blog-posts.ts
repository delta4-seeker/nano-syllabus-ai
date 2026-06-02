import type { StaticImageData } from "next/image";
import aboutStudents from "@/assets/about-students.png";
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
  metaDescription?: string;
  excerpt: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "see-exam-preparation-guide",
    cover: heroStudent,
    tag: "SEE Guide",
    date: "June 1, 2026",
    title: "How to Score 3.8+ in SEE 2026: The AI-Powered Study Guide",
    metaDescription:
      "A proven 12-week study plan for SEE 2026 that helps Class 10 students in Nepal score 3.8 GPA and above — diagnosis, targeted practice, mock sprints, and AI-powered revision with Nano Syllabus.",
    excerpt:
      "A proven 12-week system for Class 10 students targeting Grade A in SEE — from diagnosing your gaps to walking into the exam confident.",
    intro:
      "Every year, thousands of Class 10 students across Nepal sit the SEE exam wondering the same thing: am I actually ready? The honest answer, for most students, is no — not because they have not studied, but because they have been studying the wrong way. This guide gives you a smarter path, built around the habits of students who have already scored 3.8 and above.",
    sections: [
      {
        heading: "Why the Traditional Approach Fails",
        paragraphs: [
          "Nepal's SEE curriculum is wide. Science, Maths, Nepali, English, Social Studies, Optional subjects — each demands a different strategy. The average student tries to cover everything equally, which means nothing gets covered deeply.",
          "The students who score 3.8 and above do something different. They identify their weak chapters early. They drill past paper patterns. They review actively, not passively.",
        ],
      },
      {
        heading: "Phase 1 — Diagnose Your Gaps First (Weeks 1–2)",
        paragraphs: [
          "Before you open a textbook, find your gaps. Take one past paper under timed conditions for each subject. Mark every question you got wrong or guessed. Group your errors by chapter — for example, Quadratic Equations in Maths or Respiration in Science.",
          "This gives you a personalised weak-spot list. With Nano Syllabus, ask the AI to quiz you on any chapter. It knows Nepal's SEE syllabus chapter by chapter and will surface the exact question types that appear in NEB papers.",
        ],
      },
      {
        heading: "Phase 2 — Targeted Practice by Subject (Weeks 3–10)",
        paragraphs: [
          "Work through subjects in order of your gap size, starting with your weakest. For Maths, prioritise Algebra, Geometry, Statistics, and Trigonometry — these account for over 60% of marks. Solve at least 3 past paper questions per chapter before moving on and never skip working; many marks come from method, not just final answers.",
          "For Science, use diagrams. Labelling the heart, eye, and nitrogen cycle takes 10 minutes to practise and frequently appears for 4–6 marks. For English, practise reading comprehension timed and review grammar rules — tenses, modal verbs, prepositions — because these appear in every paper.",
        ],
      },
      {
        heading: "Phase 3 — Mock Exam Sprints (Weeks 11–12)",
        paragraphs: [
          "Two weeks before SEE, shift into exam simulation mode. Sit one full mock paper per subject under strict conditions — no phone, timer running, answers written in order.",
          "After each mock, review every wrong answer the same day. This builds exam-day stamina and trains your brain to retrieve knowledge under pressure rather than only in comfortable study sessions.",
        ],
      },
      {
        heading: "The 5 Study Habits That Separate 3.8+ Students",
        paragraphs: [
          "Study in blocks, not marathons — 45 minutes on, 10 minutes off. Write before you read: try to answer a question from memory first, then check the textbook. Retrieval beats re-reading every time. Use active recall daily through flashcards, self-quizzing, or explaining a concept out loud.",
          "Treat past papers as primary, not supplementary: NEB reuses question formats, and if you have seen a format five times you will recognise it on exam day. Ask when you do not understand — immediately. Letting confusion sit for a week means carrying it for a week.",
        ],
      },
      {
        heading: "How Nano Syllabus Helps You Prepare",
        paragraphs: [
          "Nano Syllabus is not a replacement for studying — it is an upgrade to how you study. Use it to get instant explanations for anything you do not understand in your NEB textbooks, solve past paper questions with step-by-step walkthroughs, and generate personalised flashcards from topics you keep getting wrong.",
          "The AI adapts to your language preference — Nepali or English — and gives examples from your actual textbook. It never gets impatient when you ask the same question ten different ways. Start free at nanosyllabus.com.",
        ],
      },
    ],
    faqs: [
      {
        question: "What GPA is needed to score 3.8 in SEE?",
        answer:
          "A GPA of 3.8 in SEE corresponds to a Grade A in Nepal's grading system, typically requiring an average score of around 75–80% across all subjects in the NEB assessment.",
      },
      {
        question: "How many months of preparation is enough for SEE?",
        answer:
          "Three months of structured preparation is enough for most students. The key is starting with a diagnostic phase, not with random reading. Two to three months of targeted practice followed by two weeks of mock exams covers the full plan.",
      },
      {
        question: "Which subjects are hardest in SEE 2026?",
        answer:
          "Most students find Maths and Science the most challenging because they require both conceptual understanding and accurate calculation. Consistent past paper practice and chapter-by-chapter gap analysis reduce difficulty significantly.",
      },
      {
        question: "Can AI help with SEE preparation in Nepal?",
        answer:
          "Yes. Nano Syllabus is an AI study tool built specifically for Nepal's NEB curriculum. It explains chapters in Nepali or English, generates practice questions from past papers, and helps students identify and fix weak spots before exam day.",
      },
    ],
  },
  {
    slug: "ioe-entrance-exam-preparation",
    cover: productEntrance,
    tag: "IOE Guide",
    date: "June 1, 2026",
    title: "IOE Entrance Exam 2026: The Complete 90-Day Preparation Blueprint",
    metaDescription:
      "A complete 90-day IOE entrance exam preparation plan for Nepal engineering aspirants — covering Physics, Maths, Chemistry, and English with month-by-month strategy, common mistakes to avoid, and AI-powered practice with Nano Syllabus.",
    excerpt:
      "The 90-day plan that separates students who clear IOE from those who don't — built around the three subjects that decide your rank.",
    intro:
      "The IOE entrance exam is one of Nepal's most competitive — roughly 1 in 4 applicants clears it for engineering programmes at Pulchowk and affiliated campuses. The gap between those who clear and those who don't is not intelligence. It is strategy. This is the 90-day plan that works.",
    sections: [
      {
        heading: "Understanding What IOE Actually Tests",
        paragraphs: [
          "IOE entrance covers Physics (25 questions, 35 marks), Chemistry (25 questions, 35 marks), Mathematics (25 questions, 35 marks), and English (25 questions, 20 marks) — 125 marks total. Pass mark varies by year but typically sits around 40–45%.",
          "The key insight: Physics and Maths carry the most marks and are the most discriminating subjects. Students who score well here almost always clear. Students who neglect them almost never do.",
        ],
        table: {
          headers: ["Subject", "Questions", "Marks"],
          rows: [
            ["Physics", "25", "35"],
            ["Chemistry", "25", "35"],
            ["Mathematics", "25", "35"],
            ["English", "25", "20"],
          ],
        },
      },
      {
        heading: "Month 1 — Build Your Foundation",
        paragraphs: [
          "Start by taking one past IOE paper without preparation. Time yourself and score it honestly. This tells you your baseline and, more importantly, which chapters are bleeding marks. Then work through high-weight chapters first — for Physics: Mechanics, Electricity and magnetism, and Waves and optics. For Maths: Limits and derivatives, Integration, Coordinate geometry, and Vectors.",
          "For each chapter, follow the same loop — read notes, solve 10 practice questions, check answers, and understand every wrong one before moving forward. For Chemistry, focus on Equilibrium and thermodynamics, Organic chemistry, and Electrochemistry.",
        ],
      },
      {
        heading: "Month 2 — Pattern Recognition Through Past Papers",
        paragraphs: [
          "IOE reuses question formats relentlessly. A student who has seen 200 IOE questions recognises patterns before they finish reading new ones. Solve the full 10-year past paper bank (2014–2024) and track which chapters appear most often, which question types you consistently get right, and which ones you consistently get wrong.",
          "Dedicate one full week to your two worst chapters. Fixing a consistently-wrong chapter is worth 3–4 extra marks on exam day — this is the highest-leverage week in the entire plan.",
        ],
      },
      {
        heading: "Month 3 — Build Exam Speed",
        paragraphs: [
          "IOE gives you 120 minutes for 100 questions — 72 seconds per question. Students who have not practised timed conditions routinely run out of time on questions they know the answers to.",
          "Sit three full mock papers per week under strict exam conditions: 120-minute timer, no phone, no notes. Target: by Week 11, consistently scoring above 55% on mocks. Stop heavy practice three days before the exam and review key formulas and definitions only — nothing new.",
        ],
      },
      {
        heading: "Physics: The Subject That Decides Your Rank",
        paragraphs: [
          "Physics carries 35 marks and is where most engineering aspirants either pull ahead or fall behind. The students who ace Physics share three habits. They derive rather than memorise — understanding where a formula comes from means they can reconstruct it under pressure. They draw diagrams for every problem, even when the question does not ask for one. And they know the trick questions cold.",
          "IOE loves edge cases: what happens to acceleration when mass doubles, which direction does current flow in a given circuit. If you have seen that pattern five times, it takes five seconds on exam day. If you have not, it takes five minutes you cannot afford.",
        ],
      },
      {
        heading: "The Common Mistakes That Kill IOE Scores",
        paragraphs: [
          "Starting too late: students who clear IOE on their first attempt typically start three to four months out. Starting three weeks before is almost never enough. Ignoring English: it is 20 marks and most students can score 14–16 here with two focused weeks on grammar and comprehension — do not leave easy marks behind.",
          "Practising without reviewing: solving past papers without analysing your mistakes teaches nothing. Every wrong answer is a lesson, so do not skip the review. Over-studying comfort subjects: time spent on weak subjects yields four times the return of grinding topics you already know well.",
        ],
      },
      {
        heading: "How to Use Nano Syllabus for IOE Prep",
        paragraphs: [
          "Nano Syllabus's entrance preparation product is built specifically for IOE, CEE, KU, and Loksewa aspirants. Use it to get step-by-step walkthroughs for any IOE past paper question, quiz yourself on any chapter until it is locked in, and ask follow-up questions when the first explanation does not click.",
          "The AI knows 10 years of IOE question banks. Try asking: give me 5 questions on circular motion from past IOE papers. It also practises with you in English — the language IOE exams are written in — so your answers are precise under pressure. Start free at nanosyllabus.com.",
        ],
      },
    ],
    faqs: [
      {
        question: "How hard is the IOE entrance exam in Nepal?",
        answer:
          "IOE entrance is one of Nepal's most competitive engineering exams. Roughly 1 in 4 applicants clears it each year. The exam tests Physics, Chemistry, Maths, and English across 100 questions in 120 minutes.",
      },
      {
        question: "How many months should I prepare for IOE entrance?",
        answer:
          "Three months of structured preparation is the standard for first-attempt success. The plan should include one month of chapter mastery, one month of past paper pattern recognition, and one month of timed mock exams.",
      },
      {
        question: "Which subject is most important for IOE entrance?",
        answer:
          "Physics and Maths together account for 70 marks out of 125 and are the most discriminating subjects. Students who score well in both almost always clear. Chemistry and English cover the remaining 55 marks and should not be neglected.",
      },
      {
        question: "Can I use AI to prepare for IOE entrance exam?",
        answer:
          "Yes. Nano Syllabus is built for IOE, CEE, and other Nepal entrance exams. It provides step-by-step solutions for past paper questions, chapter-by-chapter quizzes, and explanations in both Nepali and English to help you prepare efficiently.",
      },
    ],
  },
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
  {
    slug: "what-is-personalized-ai-learning",
    cover: productStudy,
    tag: "Guide",
    date: "June 1, 2026",
    metaDescription:
      "Personalized AI learning uses artificial intelligence to generate unique learning paths for each student. Learn how it works, its benefits, and how Nano Syllabus applies it.",
    title: "What is Personalized AI Learning? A Complete Guide",
    excerpt:
      "Personalized AI learning uses AI to generate and adapt learning content in real time based on each learner's individual goals, existing knowledge, and available time.",
    intro:
      "Personalized AI learning is an educational approach where artificial intelligence generates and adapts learning content — lessons, practice questions, explanations, and pacing — in real time based on each learner's individual goals, existing knowledge, and available time. Unlike fixed courses or textbooks, AI-personalized learning paths are unique to each student and update continuously as they progress.",
    sections: [
      {
        heading: "How Personalized AI Learning Works",
        paragraphs: [
          "Traditional education delivers the same content to every student in the same sequence. A teacher covers Chapter 3 on Tuesday regardless of whether half the class still needs more practice with Chapter 2. Personalized AI learning breaks this constraint.",
          "The process works in four stages. Assessment: the AI evaluates what the student already knows, either through an explicit quiz or by inferring from early interactions. Path generation: based on the assessment, the AI builds a custom sequence of topics, explanations, and practice problems. Adaptive delivery: the AI tracks which concepts the student grasps quickly and which take longer, adjusts pacing, re-explains topics in different ways when needed, and introduces new material when the student is ready. Feedback loop: every interaction — a correct answer, a skipped question, time spent on a section — feeds back into the AI's model of that student, making the path increasingly precise over time.",
        ],
      },
      {
        heading: "Why Personalized AI Learning Matters for Students",
        paragraphs: [
          "Nepal's students face a real challenge: a single teacher managing thirty or forty students in a classroom cannot give each one the individualized attention they need. Students preparing for competitive entrance exams like IOE or CEE often rely on the same notes, the same coaching materials, and the same schedule — regardless of their individual weak points.",
          "AI-personalized learning changes this. A student who already understands electromagnetic induction does not need to review it for forty minutes while the rest of the class catches up. Instead, they move to circuits. A student who struggles with integration gets more practice problems and a different explanation before advancing.",
          "Research consistently shows that personalized instruction produces stronger outcomes. Students who receive targeted practice on their specific gaps progress faster than students following a fixed curriculum path. The same principle applies whether the personalization comes from a human tutor or an AI system.",
        ],
      },
      {
        heading: "What Makes an AI Learning Platform Effective",
        paragraphs: [
          "Not all AI learning tools offer the same depth of personalization. When evaluating an AI learning platform, look for curriculum alignment — does the platform know your syllabus? Generic AI assistants like ChatGPT can answer questions, but they do not know the IOE entrance exam syllabus or the NEB Class 12 curriculum structure.",
          "Also consider explanation quality (can the AI explain the same concept in multiple ways?), practice and assessment (does the platform generate practice questions, not just explanations?), progress tracking, and accessibility on a mobile phone with a limited data connection.",
        ],
      },
      {
        heading: "How Nano Syllabus Applies Personalized AI Learning",
        paragraphs: [
          "Nano Syllabus is an AI co-pilot built specifically for Nepali students. It is trained on Nepal's curriculum — the NEB syllabus, IOE entrance exam question banks, CEE materials, and teacher notes — so the explanations and practice it generates are directly relevant to what students are actually studying.",
          "When a student opens Nano Syllabus, they do not get a generic AI chatbot. They get a system that understands what Chapter 7 of the Class 12 Physics textbook covers, knows which question types appear most on the IOE entrance exam, and can explain a concept the way a good Nepali teacher would — with familiar examples and clear Nepali academic context.",
          "Students can ask doubt questions and get explanations tied to their exact syllabus, generate practice questions on specific chapters, review past-paper style problems with step-by-step solutions, and get revision summaries before exams.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between adaptive learning and personalized AI learning?",
        answer:
          "Adaptive learning adjusts the pace and difficulty of a fixed content library based on student performance. Personalized AI learning goes further — it can generate new explanations, create novel practice questions, and restructure the entire learning path, not just adjust the speed through a preset sequence.",
      },
      {
        question: "Can AI replace human teachers?",
        answer:
          "No. AI learning tools are most effective as supplements, not replacements. A teacher provides classroom management, motivation, mentorship, and the kind of human connection that drives long-term engagement. AI personalizes the practice and explanation layer that teachers cannot feasibly customize for every student individually.",
      },
      {
        question: "Is personalized AI learning effective for exam preparation?",
        answer:
          "Yes, particularly for high-stakes exams with a defined syllabus. When an AI knows the exam pattern, question types, and topic weightings, it can target practice precisely — focusing more time on high-yield topics and weak areas rather than distributing time evenly across all chapters.",
      },
      {
        question: "How does Nano Syllabus personalize learning for Nepali students?",
        answer:
          "Nano Syllabus is built around Nepal's official curriculum and exam materials. When a student asks a question or requests practice, the AI generates content aligned to the NEB syllabus and entrance exam patterns — not generic global content. This makes it directly useful for Class 11, Class 12, IOE entrance, and CEE preparation.",
      },
      {
        question: "Is personalized AI learning suitable for all subjects?",
        answer:
          "It is most mature for subjects with clear right-or-wrong answers: mathematics, physics, chemistry, biology. It is increasingly effective for concept-heavy subjects like economics and computer science. It is less suited to purely creative or argumentative subjects where quality is highly subjective.",
      },
      {
        question: "How long does it take to see results with an AI learning platform?",
        answer:
          "Students typically notice improvement in their ability to answer practice questions within two to three weeks of consistent daily use (30–45 minutes per day). Exam score improvements depend on how far in advance a student begins and how consistently they use the platform.",
      },
      {
        question: "Is Nano Syllabus free?",
        answer:
          "Nano Syllabus offers a free tier that students can start with immediately. Visit nanosyllabus.com to get started.",
      },
      {
        question: "What subjects does Nano Syllabus cover?",
        answer:
          "Nano Syllabus covers the core NEB Class 11 and 12 subjects — Physics, Chemistry, Mathematics, Biology, and Computer Science — as well as IOE and CEE entrance exam preparation materials.",
      },
    ],
  },
  {
    slug: "ai-learning-platform-comparison",
    cover: productEntrance,
    tag: "Guide",
    date: "June 1, 2026",
    metaDescription:
      "Comparing the best AI learning platforms for students in 2026. See how Nano Syllabus, Khan Academy, Coursera, and ChatGPT stack up on personalization, curriculum fit, and exam prep.",
    title: "AI Learning Platform Comparison: Which Tool Is Right for Students in 2026?",
    excerpt:
      "Comparing the major AI-powered learning platforms available to students in 2026, with particular attention to what matters for students following Nepal's NEB curriculum and preparing for IOE/CEE entrance exams.",
    intro:
      "An AI learning platform uses machine learning to create, adapt, or personalize educational content in real time. The best platforms go beyond simply recommending the next video — they generate unique learning paths for each student based on their goals, current knowledge level, and the specific curriculum or exam they are preparing for.",
    sections: [
      {
        heading: "Quick Comparison",
        paragraphs: [],
        table: {
          headers: [
            "Platform",
            "Learning model",
            "Nepal curriculum",
            "Exam prep (IOE/CEE)",
            "Personalization",
            "Free access",
          ],
          rows: [
            ["Nano Syllabus", "AI-generated, curriculum-aligned paths", "Yes", "Yes", "Full (per-student)", "Yes"],
            ["Khan Academy", "Fixed video lessons + adaptive practice", "Partial", "No", "Pacing only", "Yes"],
            ["Coursera", "Fixed university courses", "No", "No", "Recommendations only", "Limited"],
            ["ChatGPT", "Open-ended conversational AI", "No", "No", "None (manual)", "Yes"],
            ["Unacademy", "Live + recorded classes", "India-focused", "No", "Low", "No"],
            ["YouTube", "Video content (not a learning platform)", "Some", "Some", "None", "Yes"],
          ],
        },
      },
      {
        heading: "Nano Syllabus",
        paragraphs: [
          "Nano Syllabus is built specifically for Nepali students. It is trained on Nepal's NEB curriculum, IOE and CEE question banks, and teacher notes — making it the only AI platform in this comparison that understands the exact syllabus students are studying.",
          "Strengths: directly aligned to Class 11, Class 12, IOE, and CEE materials; generates explanations in the style of a knowledgeable Nepali teacher; creates practice questions matched to exam patterns; doubt-solving engine that answers syllabus-specific questions; accessible on mobile with low data requirements.",
          "Best for: NEB Class 11–12 students, IOE entrance candidates, CEE aspirants who want targeted exam preparation alongside curriculum revision.",
        ],
      },
      {
        heading: "Khan Academy",
        paragraphs: [
          "Khan Academy is the world's largest free online learning platform, with millions of practice exercises and instructional videos. Its AI-powered tutor (Khanmigo) can answer questions and guide students through problems.",
          "Strengths: free and comprehensive for core subjects; strong math and science libraries; adaptive practice pacing; well-translated into multiple languages.",
          "Limitations for Nepali students: content follows US/international curriculum, not NEB syllabus; no IOE or CEE specific exam preparation; Khanmigo AI tutor requires payment; does not know Nepal-specific question patterns or marking schemes.",
          "Best for: students who want a free supplement for mathematics and science concepts at a global curriculum level.",
        ],
      },
      {
        heading: "Coursera",
        paragraphs: [
          "Coursera offers courses from top universities (MIT, Stanford, Yale). It is primarily professional development and university-level content.",
          "Limitations for Nepali school students: designed for university and professional learners, not Class 11–12; fixed course format with no adaptive personalization; most courses cost money; not aligned to NEB, IOE, or CEE content.",
          "Best for: students and professionals who want recognized certifications in specific skills (data science, business, programming) after completing school.",
        ],
      },
      {
        heading: "ChatGPT",
        paragraphs: [
          "ChatGPT is a general-purpose AI assistant that can answer questions, explain concepts, and generate practice problems on any topic. It is not a structured learning platform.",
          "Strengths: can explain any topic on demand; free tier available; multilingual capability.",
          "Limitations for exam preparation: no memory of what the student has studied before; does not know the NEB syllabus or IOE question patterns specifically; no structured learning path or progress tracking; students must direct every interaction manually.",
          "Best for: ad-hoc question answering and concept clarification as a supplement to structured study, not as a primary learning platform.",
        ],
      },
      {
        heading: "The Fundamental Difference: Curriculum Alignment",
        paragraphs: [
          "The most important factor for a Nepali student evaluating an AI learning platform is curriculum alignment. A student preparing for the IOE Physics entrance exam needs practice questions drawn from the IOE question bank, explanations calibrated to NEB Physics topics, and a platform that knows the exam's marking scheme and question type distribution.",
          "Generic AI tools like ChatGPT and global platforms like Coursera were not built with this in mind. They can provide general information but cannot replace a tool that genuinely knows the Nepali academic context.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best AI learning platform for Nepali students?",
        answer:
          "For students following the NEB curriculum or preparing for IOE/CEE entrance exams, Nano Syllabus is the most directly relevant platform because it is built around Nepal's syllabus, question banks, and exam patterns. For global curriculum or professional certification, Khan Academy (free) and Coursera (paid) are strong options.",
      },
      {
        question: "What is the difference between an AI learning platform and traditional e-learning?",
        answer:
          "Traditional e-learning delivers fixed, pre-recorded content the same way to every student. AI learning platforms generate or adapt content based on each student's performance, knowledge gaps, and goals. The result is a more efficient learning path that focuses time where the student needs it most.",
      },
      {
        question: "Can AI learning platforms help with exam preparation?",
        answer:
          "Yes, especially platforms aligned to a specific exam's syllabus and question patterns. A platform that knows the IOE past papers, the topic weightings, and the common misconceptions tested in the exam can generate targeted practice far more efficiently than a student self-selecting problems from a textbook.",
      },
      {
        question: "Is Nano Syllabus better than ChatGPT for studying?",
        answer:
          "For structured exam preparation, yes. Nano Syllabus is built as a learning co-pilot with Nepal's curriculum baked in. ChatGPT is a general assistant with no memory, no learning path, and no knowledge of the NEB syllabus. Students often use both: ChatGPT for ad-hoc questions and Nano Syllabus for structured preparation.",
      },
      {
        question: "Which AI learning platform is free?",
        answer:
          "Nano Syllabus, Khan Academy, and the base tier of ChatGPT are all free to start. Coursera and Unacademy require payment for most content.",
      },
      {
        question: "How do AI learning platforms personalize education?",
        answer:
          "Effective AI learning platforms assess what a student already knows, generate a custom content sequence, monitor how the student responds to each piece of content, and update the path in real time. The depth of personalization varies: some platforms only adjust difficulty and pacing (adaptive), while others generate entirely new explanations and practice (generative).",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
