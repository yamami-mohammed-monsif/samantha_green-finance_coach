"use client";

import { useState } from "react";
import Section from "../UI/Section";
import FAQItem from "../UI/FAQItem";
import { FAQData } from "@/constants";

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev: number | null) => (prev === id ? null : id));
  };

  return (
    <Section>
      <div className="text-center mb-10">
        <h2>
          Got Questions?
          <br /> Let's Clear Things Up
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        {FAQData.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQs;
