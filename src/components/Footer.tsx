const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-lg text-foreground">
          Catalyst<span className="text-primary">.</span>Advisory
        </p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Catalyst Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
