import { Link } from "react-router-dom";

const Footer = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  return (
    <footer className="footer flex flex-col items-center gap-4 p-4 bg-background">
      <div className="logo">{title}</div>
      <nav className="nav flex gap-4">
        {links.map((link) => (
          <Link key={link.label} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
