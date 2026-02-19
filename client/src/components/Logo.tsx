import logoImg from "../assets/logo-nav.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImg} alt="NAV Logo" className="h-12 w-12 object-contain" />
      <span className="font-heading font-bold text-3xl tracking-tighter text-primary">NAV</span>
    </div>
  );
};

export default Logo;
