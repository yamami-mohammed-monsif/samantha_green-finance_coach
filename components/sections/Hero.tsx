import Section from "../UI/Section";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Section className="text-white lg:mt-20">
      <div>
        <span className="block text-[10px] mb-1">
          Trusted by <span className="font-bold">over 40</span> creative
          professionals to transform their finances
        </span>
        <h1 className="text-4xl md:text-[42px] lg:text-[64px] font-inter font-bold mb-6 max-w-[550px]">
          Feel in Control of Your Money Without Stress
        </h1>
        <p className="mt-2 text-base leading-5 mb-8 max-w-[400px]">
          Overwhelmed by money? I’ll help you take control starting with my free
          budget starter kit.
        </p>
        <button className="bg-mint text-white px-5 py-2 flex items-center rounded-lg cursor-pointer hover:bg-mint-hover hover:scale-110 transition-all duration-200 ease">
          <span>Get the Free Budget Kit Now</span>
          <ArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </Section>
  );
};

export default Hero;
