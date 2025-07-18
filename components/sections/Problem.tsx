import Section from "../UI/Section";
import Image from "next/image";
import PainPoint from "../UI/PainPoint";

const Problem = () => {
  return (
    <Section>
      <div>
        <h2>Money Shouldn’t Feel This Confusing</h2>
        <p className="section-intro">
          You’re not lazy. You’re not bad with money. You’ve just never been
          given a simple system that actually{" "}
          <span className="font-bold">fits your life</span> as a creative.
        </p>
      </div>
      <div className="relative mt-4 w-fit mx-auto">
        <Image
          src="/problem.png"
          alt="Problem Illustration"
          width={867}
          height={480}
          className="mx-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
        />
        <img
          src="/dots.png"
          alt="dots pattern"
          className="absolute -top-3 -left-3 w-20 h-20 -z-10"
        />
        <PainPoint />
      </div>
    </Section>
  );
};

export default Problem;
