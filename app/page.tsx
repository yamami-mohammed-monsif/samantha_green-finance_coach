import Hero from "@/components/sections/Hero";
import Header from "@/components/Header";
import Problem from "@/components/sections/Problem";
import Sollution from "@/components/sections/Sollution";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <>
      <div className="relative w-full lg:h-[90vh] py-8 overflow-hidden mb-10 md:mb-12 lg:mb-16">
        <div className="absolute inset-0 -z-10">
          <picture className="relative w-full h-auto">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_rgba(10,10,10,0.8)_10%,_rgba(10,10,10,0.69)_30%,_rgba(10,10,10,0)_100%)]" />
            <source
              media="(min-width: 1024px)"
              srcSet="/hero-desktop.webp"
              type="image/jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/hero-tablet.webp"
              type="image/jpeg"
            />
            <img
              src="/hero-mobile.jpg"
              alt="Hero Image"
              width={1440}
              height={765}
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
        <Header />
        <Hero />
      </div>
      <Problem />
      <Sollution />
      <Testimonials />
      <About />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default page;
