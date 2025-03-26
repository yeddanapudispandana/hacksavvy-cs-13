import Navbar from "@/components/home/navbar.home";
import FooterHome from "@/components/home/footer.home";
import HeroHome from "@/components/home/hero.home";
import { FEATURE_LIST } from "@/lib/lists/feature.list";
import FeatureCardHome from "@/components/home/feature-card.home";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center px-5 sm:px-8 gap-14 py-6 pb-10 md:py-10 md:pb-16">
        <HeroHome />
        <ul className="grid grid-cols-3 justify-center items-center gap-3 px-20">
          {FEATURE_LIST.map((feature) => (
            <FeatureCardHome item={feature} />
          ))}
        </ul>
      </div>
      <FooterHome />
    </div>
  );
};

export default HomePage;
