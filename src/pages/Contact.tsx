import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 lg:pb-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-medium leading-[1.15] text-foreground mb-6">
            Let's explore what's{" "}
            <span className="italic text-gradient-gold">possible.</span>
          </h1>
          <p className="font-body text-lg text-cream-muted leading-relaxed mb-14 max-w-xl">
            Whether you have a specific venture opportunity in mind or want to
            discuss how intrapreneurship could transform your organization, we'd
            love to hear from you.
          </p>

          <a
            href="mailto:info@karmlo.com"
            className="inline-block font-body text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Send Message
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
