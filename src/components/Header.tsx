import { Link } from "react-router-dom";

const Header = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  return (
    <header className="header flex justify-between items-center p-4 bg-background">
      <div className="logo">{title}</div>

      <nav className="nav flex gap-4">
        {links.map((link) => (
          <Link key={link.label} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>

    //   {/* <nav className="absolute top-[91px] left-[1120px] flex items-center gap-[41px]">
    //     <div className="h-[30px] flex items-center [font-family:'Inika-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] underline whitespace-nowrap">
    //       Home
    //     </div>
    //     <div className="h-[30px] flex items-center [font-family:'Inika-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] underline whitespace-nowrap">
    //       About
    //     </div>
    //     <div className="h-[30px] flex items-center [font-family:'Inika-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] underline whitespace-nowrap">
    //       Contact
    //     </div>
    //   </nav> */}
  );
};

export default Header;
