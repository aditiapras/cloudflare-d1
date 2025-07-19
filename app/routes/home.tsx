import HeroSection from "~/components/hero-section";
import type { Route } from "./+types/home";
import ContentSection from "~/components/content-section";
import StatsSection from "~/components/stats-section";
import FeaturesSection from "~/components/features-section";
import FAQs from "~/components/faq-section";
import BentoSection from "~/components/bento-section";
import WordsSection from "~/components/words-section";
import BlogSection from "~/components/blog-section";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <BlogSection />
      <WordsSection />
      <FeaturesSection />
      <StatsSection />
      <BentoSection />
      <FAQs />
    </>
  );
}
