import Section from "../UI/Section";
import { ArrowRight } from "lucide-react";
import Button from "../UI/Button";

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
        <Button variant="primary">Get the Free Budget Kit Now</Button>
      </div>
    </Section>
  );
};

export default Hero;
