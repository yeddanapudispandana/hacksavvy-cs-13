import { cn } from "@/lib/utils";

interface LogoProps {
  withText?: boolean;
  className?: string;
  imgClassName?: string;
}

const Logo = ({ withText = false, className, imgClassName }: LogoProps) => {
  if (!withText) {
    return (
      <div className={cn("flex justify-center items-center", className)}>
        <img
          src="/assets/vectors/logo.svg"
          alt="LOGO"
          className={cn("w-5", imgClassName)}
        />
      </div>
    );
  }

  return (
    <div className={cn("flex justify-center items-center gap-1", className)}>
      <img
        src="/assets/vectors/logo.svg"
        alt="LOGO TEXT"
        className={cn("w-5", imgClassName)}
      />
      <span className="font-audiowide text-h1 text-lg">Patron</span>
    </div>
  );
};

export default Logo;
