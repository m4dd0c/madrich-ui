import "../prism.css";
import Hero from "@/components/Layout/Hero";
import Features from "@/components/Layout/Features";
import Show from "@/components/Layout/Show";
import QnA from "@/components/Layout/QnA";
import Contact from "@/components/Layout/Contact";

export default function Home() {
  return (
    <div className="bg-[#F4F4F0]">
      <Hero />
      <Features />
      <Show />
      <QnA />
      <Contact />
    </div>
  );
}
