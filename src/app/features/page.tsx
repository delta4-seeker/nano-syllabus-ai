import {
  BookOpen,
  Bot,
  GraduationCap,
  Languages,
  LineChart,
  Mic,
  NotebookPen,
  Sparkles,
  Target,
  Timer,
  Users,
  Wand2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "Curriculum-aware AI, doubt solving in your language, past papers, smart revision, and more.",
  path: "/features",
});

const features = [
  {
    icon: BookOpen,
    title: "Curriculum-aware",
    body: "Built on your official curriculum and textbooks, chapter by chapter.",
  },
  {
    icon: Languages,
    title: "Your language + English",
    body: "Switch languages mid-conversation. Learn however you think.",
  },
  {
    icon: Bot,
    title: "Patient AI tutor",
    body: "Ask anything, anytime. Re-explain in five different ways.",
  },
  {
    icon: NotebookPen,
    title: "Teacher notes",
    body: "Verified notes co-created with top educators.",
  },
  {
    icon: GraduationCap,
    title: "Past papers",
    body: "Solved papers for your board, entrance, and licensing exams.",
  },
  { icon: Wand2, title: "Smart summaries", body: "Turn 30 pages into a 2-minute revision card." },
  { icon: Target, title: "Adaptive quizzes", body: "Quizzes that get harder as you get better." },
  {
    icon: LineChart,
    title: "Progress analytics",
    body: "See exactly which topics you've mastered and which need work.",
  },
  { icon: Timer, title: "Study planner", body: "AI-built study schedules around your exam date." },
  { icon: Mic, title: "Voice mode", body: "Talk to your tutor on the way to school." },
  { icon: Sparkles, title: "Flashcards", body: "Auto-generated from your weak spots." },
  { icon: Users, title: "Free for students", body: "A generous free plan, always." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything you need to learn well."
        subtitle="A focused set of tools, designed around how students actually study."
      />
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-6 text-xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
