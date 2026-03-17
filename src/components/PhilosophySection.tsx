const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.15] text-foreground">
              Your next disruptive competitor could be{" "}
              <span className="italic text-gradient-gold">you.</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-body text-lg text-cream-muted leading-relaxed">
              Most large companies sit on untapped potential — existing assets,
              customer relationships, proprietary data, and domain expertise that
              could fuel entirely new businesses. The problem isn't a lack of
              ideas. It's the lack of a structured approach to identify, validate,
              and scale ventures from within.
            </p>
            <p className="font-body text-lg text-cream-muted leading-relaxed">
              Our founding team has spent over a decade doing exactly this — not
              as outside advisors, but as operators who built technology startups
              inside industrial companies, turned legacy businesses into digital
              platforms, and created entirely new revenue streams from existing
              capabilities.
            </p>
            <p className="font-body text-lg text-cream-muted leading-relaxed">
              We bring real intrapreneurial experience: from pitching internal
              boards to recruiting startup teams within corporate structures, to
              navigating the politics that kill most internal ventures before they
              begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
