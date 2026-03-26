import { Briefcase, Users, TrendingUp, Cpu, HandshakeIcon, DollarSign, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Management Consulting",
    description:
      "Hands-on operational guidance to improve performance, streamline processes, and drive measurable outcomes across your organization.",
  },
  {
    icon: Users,
    title: "Board of Directors",
    description:
      "Independent board membership bringing strategic oversight, governance expertise, and accountability to growth-stage and established companies.",
  },
  {
    icon: TrendingUp,
    title: "Strategy Development",
    description:
      "Craft actionable corporate and business-unit strategies that align market opportunity with organizational capability.",
  },
  {
    icon: LayoutDashboard,
    title: "Fractional C-Suite",
    description:
      "Step in as an interim or part-time executive — CEO, COO, or President — to lead through transitions, launches, or turnarounds.",
  },
  {
    icon: HandshakeIcon,
    title: "M&A & Due Diligence",
    description:
      "Evaluate acquisition targets, structure partnerships, and conduct operational due diligence to de-risk transactions.",
  },
  {
    icon: Cpu,
    title: "Innovation & Digital Transformation",
    description:
      "Guide the adoption of emerging technologies and new business models to future-proof your competitive position.",
  },
  {
    icon: DollarSign,
    title: "Capital Raising & Investor Relations",
    description:
      "Prepare compelling investor materials, refine capital strategy, and build relationships that unlock funding.",
  },
  {
    icon: Users,
    title: "Intrapreneurial Compensation Design",
    description:
      "Design compensation and incentive plans for startup teams incubated within larger companies — aligning entrepreneurial drive with corporate structure.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Services
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 max-w-2xl">
          How we <span className="italic text-gradient-gold">deliver.</span>
        </h2>
        <p className="font-body text-lg text-cream-muted leading-relaxed mb-16 max-w-2xl">
          Flexible engagements tailored to your stage and ambition — from strategic advisory to hands-on leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-sm border border-border bg-background hover:border-primary/40 transition-all duration-300"
            >
              <service.icon className="w-6 h-6 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-cream-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
