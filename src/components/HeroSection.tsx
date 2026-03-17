import heroImage from "@/assets/hero-atrium.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 lg:pb-32 pt-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern corporate architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Intrapreneurship & Venture Building
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground mb-8">
            Build the next
            <br />
            <span className="text-gradient-gold italic">billion-dollar</span>
            <br />
            venture — inside your
            <br />
            own company.
          </h1>
          <p className="font-body text-lg md:text-xl text-cream-muted max-w-xl leading-relaxed mb-10">
            We help established companies unlock hidden value by launching and scaling
            high-growth ventures from within — turning core competencies into new
            revenue engines.
          </p>
          <a
            href="#philosophy"
            className="inline-block font-body text-sm tracking-[0.2em] uppercase border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Our Approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
