"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-32"></div>
  </div>
);

const Problem = dynamic(() => import("../components/sections/Problem"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Solution = dynamic(() => import("../components/sections/Sollution"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Testimonials = dynamic(
  () => import("../components/sections/Testimonials"),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  }
);

const About = dynamic(() => import("../components/sections/About"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const FAQs = dynamic(() => import("../components/sections/FAQs"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const CTA = dynamic(() => import("../components/sections/CTA"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Footer = dynamic(() => import("../components/sections/Footer"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const ClientSections = () => {
  return (
    <Suspense fallback={<SectionLoader />}>
      <Problem />
      <Solution />
      <Testimonials />
      <About />
      <FAQs />
      <CTA />
      <Footer />
    </Suspense>
  );
};

export default ClientSections;
