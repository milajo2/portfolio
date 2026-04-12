const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-4 p-4 bg-background">
      <div className="logo">Thank you for visiting!</div>
      <nav className="nav flex gap-4">
        <a 
          href="https://uk.linkedin.com/in/jamila-azad-b517b2128" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:azadjamila123@gmail.com">
          Email
        </a>
      </nav>
    </footer>
  );
};

export default Footer;