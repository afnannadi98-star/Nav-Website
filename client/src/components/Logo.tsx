import logoImg from "@assets/NAV_Logo_copy_1772810699063.png";

const Logo = ({ className = "", textColor = "text-primary", whiteLogo = false }: { className?: string, textColor?: string, whiteLogo?: boolean }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="NAV Logo" 
        className="h-8 w-auto object-contain block"
        style={whiteLogo ? { filter: 'invert(1) brightness(1.1)' } : undefined}
      />
    </div>
  );
};

export default Logo;
