import logoImg from "@assets/n_logo_copy_1771508447961.png";

const Logo = ({ className = "", textColor = "text-primary" }: { className?: string, textColor?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logoImg} alt="NAV Logo" className="h-10 w-10 object-contain" />
      <span className={`font-heading font-bold text-3xl tracking-tighter ${textColor}`}>NAV</span>
    </div>
  );
};

export default Logo;
