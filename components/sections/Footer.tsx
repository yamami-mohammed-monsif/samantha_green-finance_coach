import Section from "../UI/Section";
import { NavLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <Section className="bg-gray-900 text-white pt-50 pb-2 -mt-50 -z-10 relative">
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between max-w-4xl mx-auto px-4">
        <div className="text-2xl font-bold">SAMANTHA</div>
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6">
          {NavLinks.map(({ id, href, label }) => {
            return (
              <Link
                key={id}
                href={href}
                className="text-base transition-all duration-200 hover:scale-110"
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <p className="text-[10px] text-center mt-20">
        © 2025 Samantha. All rights reserved.
      </p>
    </Section>
  );
};

export default Footer;
