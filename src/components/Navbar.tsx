import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/KARM_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Track Record", href: "/#track-record" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Karmlo Ventures" className="h-10" />
            <span className="font-display text-xl tracking-wide text-foreground">
              Karmlo<span className="text-primary">.</span>Ventures
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
