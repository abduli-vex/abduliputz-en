import Hero from "../components/Home/Hero";
import TextTicker from "../components/Home/TextTicker";
import { PiArrowElbowRightDown } from "react-icons/pi";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col overflow-hidden">
      {/* HERO */}
      <div className="flex-1 flex items-center">
        <Hero />
      </div>

      {/* QUOTE AREA */}
      <div className="flex items-center justify-end gap-2 py-6 md:py-8 text-sm text-neutral-500">
        <span>_quote</span>
        <PiArrowElbowRightDown className="animate-bounce" />
      </div>

    {/* TICKER */}
      <div className="border-t border-neutral-800">
        <TextTicker text="I’m not just learning how to write code — I’m learning how to think like an engineer. Every line of code, every bug, and every project is part of a process of continuous improvement, where curiosity drives progress and mistakes become lessons." />
      </div>
    </section>
  );
}
