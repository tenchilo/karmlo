import { ArrowRight } from "lucide-react";

const expertiseAreas = [
  {
    number: "01",
    title: "Internal Venture Creation",
    description:
      "We help identify and validate new business opportunities hiding inside your existing operations, then build the team and structure to launch them. Our founder served as President of Pason Power, a venture created within Pason Systems (PSI:TSX).",
  },
  {
    number: "02",
    title: "Corporate-to-Platform Transformation",
    description:
      "Migrate legacy business models into digital platforms and marketplaces. We've done it in workforce travel, energy services, and environmental consulting.",
  },
  {
    number: "03",
    title: "Growth Strategy & Capital Markets",
    description:
      "With deep experience in finance, oil & gas, renewable energy, and capital markets, we connect operational innovation to investor narratives that unlock funding.",
  },
  {
    number: "04",
    title: "Technology & Disruptive Business Models",
    description:
      "Evaluate emerging technologies and business model disruptions that can be harnessed — or must be defended against — using your company's core assets.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Areas of Expertise
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-16 max-w-2xl">
          Where operators meet strategy.
        </h2>

        <div className="space-y-0">
          {expertiseAreas.map((area) => (
            <div
              key={area.number}
              className="group border-t border-border py-10 lg:py-14 grid lg:grid-cols-12 gap-6 items-start cursor-pointer hover:bg-card/50 transition-colors duration-300 px-4 -mx-4"
            >
              <span className="lg:col-span-1 font-body text-sm text-primary tracking-wider">
                {area.number}
              </span>
              <h3 className="lg:col-span-4 font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              <p className="lg:col-span-6 font-body text-base text-cream-muted leading-relaxed">
                {area.description}
              </p>
              <div className="lg:col-span-1 flex justify-end">
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
