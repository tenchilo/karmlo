import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} — ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@karmlo.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "If nothing happens, email us directly at info@karmlo.com" });
  };

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

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your venture opportunity…"
              />
            </div>
            <button
              type="submit"
              className="font-body text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-gold-light transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
