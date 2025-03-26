import { LucideIcon } from "lucide-react";

interface FeatureCardHomeProps {
  item: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

const FeatureCardHome = ({ item }: FeatureCardHomeProps) => {
  return (
    <li
      key={item.id}
      className={`relative flex flex-col items-start justify-center space-y-1 p-4 rounded-md bg-midnight hover:bg-neutral-900 border border-neutral-800 transition-all cursor-pointer`}
    >
      <div
        className={`z-0 w-10 h-10 blur-2xl bg-gradient-to-r from-neutral-200 to-grape-100 top-5 left-5 rounded-full absolute`}
      />

      <div className="z-10 flex items-center space-x-2 mb-2">
        <div
          className={`p-2 rounded-full bg-gradient-to-br from-white via-grape-100 to-grape-400`}
        >
          <item.icon
            strokeWidth={2}
            className="size-3 md:size-5"
            color={"#000"}
          />
        </div>
        <span className="text-sm md:text-base font-semibold text-h1">
          {item.title}
        </span>
      </div>
      <p className="text-xs max-h-12 overflow-clip md:text-base font-light text-p">
        {item.description}
      </p>
    </li>
  );
};

export default FeatureCardHome;
