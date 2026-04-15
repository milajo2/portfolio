import { Link } from "react-router-dom";

const Header = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  return (
    <header className="header flex justify-between items-center p-4 bg-background">
      <div className="logo"><Link to="/">{title}</Link></div>

      <nav className="nav flex gap-4">
        {links.map((link) => (
          <Link key={link.label} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
