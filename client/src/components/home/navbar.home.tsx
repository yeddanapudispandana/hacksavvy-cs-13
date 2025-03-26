import { Link } from "react-router-dom";
import Logo from "../shared/logo";
import { GithubIcon, Menu, Star } from "lucide-react";
import { Button } from "../ui/button";

const NavbarHome = () => {
  return (
    <nav className="w-full sticky top-0 z-50 h-[55px] flex justify-between items-center bg-transparent backdrop-blur-lg border-b border-neutral-900 px-7">
      <Link to="/">
        <Logo withText />
      </Link>
      <div className="flex justify-start items-center gap-4">
        <div className="flex justify-start items-center gap-[1px] border-[1px] border-neutral-900 p-2 px-3 rounded-sm">
          <GithubIcon color="#f2f2f2" size={15} />
          <Star color="#E29726" size={10} />
        </div>
        <div className="hidden md:flex justify-start items-center gap-2">
          <Button>Connect</Button>
        </div>
        <Menu className="md:hidden" color="#f2f2f2" />
      </div>
    </nav>
  );
};

export default NavbarHome;
