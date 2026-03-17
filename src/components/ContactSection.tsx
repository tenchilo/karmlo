const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Start a Conversation
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.15] text-foreground mb-6">
            Ready to build your next venture{" "}
            <span className="italic text-gradient-gold">from within?</span>
          </h2>
          <p className="font-body text-lg text-cream-muted leading-relaxed mb-10">
            Whether you're exploring a specific opportunity or looking for a
            structured intrapreneurship program, we'd welcome the conversation.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
