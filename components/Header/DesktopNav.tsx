import Link from "next/link";
import { NavLinks } from "@/constants";

export default function DesktopNav() {
  const baseClasses =
    "text-base text-white transition-all duration-200 hover:scale-110 hover:text-gray-900";

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NavLinks.map(({ id, href, label }) => {
        return (
          <Link key={id} href={href} className={`${baseClasses}`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
