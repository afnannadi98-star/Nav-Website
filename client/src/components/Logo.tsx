import logoImg from "@assets/image_1771508552898.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoImg} alt="NAV Logo" className="h-10 w-auto object-contain" />
    </div>
  );
};

export default Logo;
