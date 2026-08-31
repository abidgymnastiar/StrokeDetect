const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 bg-primary/5 border-t border-primary/10">
      <div className="container">
        <p className="text-center text-sm text-default-500">
          &copy; {currentYear} StrokeDetect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
