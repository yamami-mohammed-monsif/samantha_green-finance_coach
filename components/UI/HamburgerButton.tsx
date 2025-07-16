"use client";

import { motion, MotionProvider } from "../../utils/MotionProvider";

type buttonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Path = ({ isOpen, ...props }: { isOpen: boolean } & any) => (
  <motion.path
    fill="transparent"
    strokeWidth="8"
    stroke={isOpen ? "#2E2E2E" : "#fff"}
    strokeLinecap="round"
    {...props}
  />
);

const HamburgerButton = ({ isOpen, setIsOpen }: buttonProps) => {
  return (
    <button
      className="lg:hidden cursor-pointer z-50 w-7 h-7 md:w-10 md:h-10"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <MotionProvider>
        <motion.svg
          width={30}
          height={30}
          viewBox="0 0 100 100"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          aria-hidden="true"
        >
          <Path
            variants={{
              closed: {
                d: "M 80 25 H 10",
                opacity: 1,
                transition: { delay: 0.4 },
              },
              open: { d: "M 80 25 H 80", opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            isOpen={isOpen}
          />

          <Path
            variants={{
              closed: {
                d: "M 55 50 H 10",
                opacity: 1,
                transition: { delay: 0.4 },
              },
              open: { d: "M 80 50 H80", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            isOpen={isOpen}
          />

          <Path
            variants={{
              closed: {
                d: "M 80 75 H 10",
                opacity: 1,
                transition: { delay: 0.4 },
              },
              open: { d: "M 80 75 H 80", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            isOpen={isOpen}
          />

          {/* paths forming X */}
          <Path
            variants={{
              closed: { d: "M 80 50 H 20", opacity: 0, x: 0 },
              open: { rotate: 45, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 0.2 }}
            isOpen={isOpen}
          />
          <Path
            variants={{
              closed: { d: "M 80 50 H 20", opacity: 0, x: 0 },
              open: { rotate: -45, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 0.2 }}
            isOpen={isOpen}
          />
        </motion.svg>
      </MotionProvider>
    </button>
  );
};

export default HamburgerButton;
