"use client";

import { ChevronUp } from "lucide-react";
import {
  motion,
  AnimatePresence,
  MotionProvider,
} from "@/utils/MotionProvider";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <MotionProvider>
      <div className="border-b border-gray-700 last:border-none">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="faq-answer"
        >
          <h3 className="text-gray-900 font-medium pr-4">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ChevronUp className="w-5 h-5 text-gray-900" />
          </motion.div>
        </button>{" "}
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-4 text-gray-800 text-sm">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionProvider>
  );
};

export default FAQItem;
