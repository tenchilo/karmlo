const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-lg text-foreground">
          Karmlo<span className="text-primary">.</span>Ventures
        </p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karmlo Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
