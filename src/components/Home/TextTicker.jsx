export default function TextTicker({ text }) {
  return (
    <section className="overflow-hidden bg-black py-6 text-white max-w-5xl mx-auto">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap pr-16 text-6xl font-semibold">
          {text}
        </span>
        <span className="whitespace-nowrap pr-16 text-6xl font-semibold">
          {text}
        </span>
      </div>
    </section>
  );
}
