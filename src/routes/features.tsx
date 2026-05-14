import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { BookOpen, Bot, GraduationCap, Languages, LineChart, Mic, NotebookPen, Sparkles, Target, Timer, Users, Wand2 } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Nano Syllabus" },
      { name: "description", content: "Curriculum-aware AI, doubt solving in Nepali, past papers, smart revision and more." },
      { property: "og:title", content: "Nano Syllabus Features" },
      { property: "og:description", content: "Everything inside your AI study companion." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: BookOpen, title: "Curriculum-aware", body: "Built on NEB, SEE and CDC textbooks chapter-by-chapter." },
  { icon: Languages, title: "Nepali + English", body: "Switch languages mid-conversation. Learn however you think." },
  { icon: Bot, title: "Patient AI tutor", body: "Ask anything, anytime. Re-explain in 5 different ways." },
  { icon: NotebookPen, title: "Teacher notes", body: "Verified notes co-created with top educators." },
  { icon: GraduationCap, title: "Past papers", body: "Solved papers for SEE, +2, IOE, CEE and Loksewa." },
  { icon: Wand2, title: "Smart summaries", body: "Turn 30 pages into a 2-minute revision card." },
  { icon: Target, title: "Adaptive quizzes", body: "Quizzes that get harder as you get better." },
  { icon: LineChart, title: "Progress analytics", body: "See exactly which topics you've mastered — and which need work." },
  { icon: Timer, title: "Study planner", body: "AI-built study schedules around your exam date." },
  { icon: Mic, title: "Voice mode", body: "Talk to your tutor on the way to school." },
  { icon: Sparkles, title: "Flashcards", body: "Auto-generated from your weak spots." },
  { icon: Users, title: "Free for students", body: "A generous free plan, always." },
];

function FeaturesPage() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Features</p>
        <h1 className="mt-3 text-5xl md:text-7xl">Everything you need to learn well.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A focused set of tools — designed around how students in Nepal actually study.
        </p>
      </section>
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
