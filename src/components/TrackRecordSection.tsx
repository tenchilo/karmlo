import patternImage from "@/assets/pattern-network.jpg";

const highlights = [
  {
    metric: "President",
    context: "Served as President of a clean energy subsidiary within a publicly traded technology company, leading the venture from inception through full operational buildout.",
  },
  {
    metric: "VP & COO",
    context: "Led operations at a technology startup built inside a publicly traded industrial services company — a textbook intrapreneurship success.",
  },
  {
    metric: "Board Member",
    context: "Served on the boards of an established environmental consulting firm and a large SaaS gas monitoring company, guiding strategic growth and diversification.",
  },
  {
    metric: "Venture Advisor",
    context: "Advised startups through the scale-up process — bridging the gap between startup agility and corporate resources.",
  },
  {
    metric: "Cross-Industry",
    context: "Deep operational experience spanning renewable energy storage, workforce travel technology, finance, oil & gas, and capital markets.",
  },
  {
    metric: "M&A & Exits",
    context: "Achieved successful exits including a SaaS company, with hands-on experience acquiring companies and divesting non-core subsidiaries to sharpen strategic focus.",
  },
];

const TrackRecordSection = () => {
  return (
    <section id="track-record" className="py-24 lg:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Track Record
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.15] text-foreground mb-8">
              Built from the{" "}
              <span className="italic text-gradient-gold">inside out.</span>
            </h2>
            <p className="font-body text-lg text-cream-muted leading-relaxed mb-10">
              Our team didn't study intrapreneurship in a classroom. They
              lived it — building a digital marketplace platform inside a
              traditional industrial company, growing it from concept to a fully
              operational business unit serving thousands of clients.
            </p>
            <div className="relative w-full aspect-square max-w-xs">
              <img
                src={patternImage}
                alt="Network growth pattern"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-10">
              {highlights.map((item, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-8 hover:border-primary transition-colors duration-300">
                  <h3 className="font-display text-2xl text-primary mb-3">
                    {item.metric}
                  </h3>
                  <p className="font-body text-base text-cream-muted leading-relaxed">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
