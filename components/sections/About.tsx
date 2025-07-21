import Section from "../UI/Section";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const About = () => {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col items-center justify-center gap-4 mdpls:flex-row mdpls:gap-10 xl:gap-28">
        <div className="h-[400px] mdpls:h-auto">
          <Image
            src="/about.webp"
            alt="Samantha sitting in her office smiling to the camera"
            width={840}
            height={560}
            className="rounded-lg h-full object-cover mdpls:max-w-[500px] mdpls:h-auto"
          />
        </div>
        <div>
          <h3 className="font-inter text-center text-2xl font-semibold text-gray-900 mdpls:text-3xl md:text-left mb-3 mdpls:mb-5 max-w-[500px]">
            Meet “Samantha” Budget Coach for Creatives
          </h3>
          <div className="mdpls:max-w-[550px]">
            <p className="mb-4">
              I’ve worked with over 40 freelancers, artists, and solo founders
              who felt overwhelmed by money. I used to feel the same way
              anxious, disorganized, and unsure where my income was going.
            </p>
            <p>
              That’s why I created a system that’s simple, kind, and built for
              creative minds. No spreadsheets. No shame. Just clarity, calm, and
              small steps that stick.
            </p>
          </div>
          <div className="flex-col items-start mt-6 mdpls:mt-10 hidden xl:flex">
            <Button variant="secondary" className="w-full mdpls:w-auto">
              <Link href="#cta">Claim Your Free Kit now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 mdpls:mt-10 xl:hidden">
        <Button variant="secondary" className="w-full mdpls:w-auto">
          Claim Your Free Kit now
        </Button>
      </div>
      <img
        src="dots.png"
        alt="dots pattern"
        className="hidden mdpls:inline-block absolute aspect-square w-30 right-20 -bottom-20 -rotate-10"
      />
    </Section>
  );
};

export default About;
