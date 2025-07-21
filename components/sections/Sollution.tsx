import Section from "../UI/Section";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";
import { sollutions } from "@/constants";

const Sollution = () => {
  return (
    <Section className="bg-mint-light py-6 md:py-10">
      <div className="w-fit mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-20">
        <div className="lg:mt-10">
          <h2 className="lg:[text-align:left_!important] lg:[margin-left:0_!important]">
            Start Feeling in Control One Step at a Time
          </h2>
          <p className="section-intro lg:[text-align:left_!important] lg:[margin-left:0_!important] lg:[margin-right:0_!important] lg:[max-width:400px_!important]">
            If you're a creative or freelancer, this is your roadmap to feeling
            in control again.
          </p>
        </div>
        <div className="relative w-fit mx-auto lg:row-span-2">
          <Image
            src="/sollution.webp"
            alt="Solution Illustration"
            width={867}
            height={480}
            className="mx-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
          />
          <img
            src="/dots.png"
            alt="dots pattern"
            className="absolute -top-3 -left-3 w-20 h-20 -z-10"
          />
        </div>
        <ul className="flex flex-col gap-4">
          {sollutions.map((solution) => (
            <li
              key={solution.id}
              className={`flex items-center gap-4 bg-white px-4 py-2 rounded-lg md:w-[80%] ${solution.ml}`}
            >
              <span className="w-[42px] h-[42px] bg-mint text-gray-900 text-xl leading-5 font-semibold flex items-center justify-center rounded-full border-[5px] border-[#B0E4CE] flex-shrink-0">
                {solution.id}
              </span>
              <h3>{solution.text}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 lg:mt-10 flex justify-center items-center">
        <Button variant="secondary" className="w-full md:w-auto">
          <Link href="#cta">Get the Free Budget Kit Now</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Sollution;
