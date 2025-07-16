import { NavLinks } from "@/constants";
import { div, nav } from "motion/react-client";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <nav
      className={`fixed top-0 right-0 bottom-0 left-1/4 bg-[#E6F7F2] transition-transform duration-300 ease-in-out z-30 pt-10 pl-5 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul>
        {NavLinks.map((link) => (
          <li key={link.href} onClick={() => setIsOpen(false)}>
            <Link href={link.href} className="block py-2 px-4 text-[#2E2E2E]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
