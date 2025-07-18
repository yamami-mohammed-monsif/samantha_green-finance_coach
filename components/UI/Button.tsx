import { ArrowRight } from "lucide-react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({ children, variant, onClick, className }: ButtonProps) => {
  const baseClasses =
    "px-10 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer";
  const variantClasses =
    variant === "secondary"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-mint text-white hover:bg-mint-hover";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className || ""}`}
    >
      <span>{children}</span>
      <ArrowRight className="inline-block ml-2 w-5 h-5" />
    </button>
  );
};

export default Button;
