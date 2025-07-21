import { ArrowRight } from "lucide-react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  variant,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) => {
  const baseClasses =
    "group px-10 py-3 rounded-lg transition-all duration-300 flex items-center justify-center " +
    (disabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:scale-105 cursor-pointer");
  const variantClasses =
    variant === "secondary"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-mint text-white hover:bg-mint-hover";

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className || ""}`}
    >
      <span>{children}</span>
      <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
    </button>
  );
};

export default Button;
