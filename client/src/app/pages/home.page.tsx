import Navbar from "@/components/home/navbar.home";
import FooterHome from "@/components/home/footer.home";
import HeroHome from "@/components/home/hero.home";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center px-5 sm:px-8 gap-14 py-6 pb-10 md:py-10 md:pb-16">
        <HeroHome />
      </div>
      <FooterHome />
    </div>
  );
};

export default HomePage;
