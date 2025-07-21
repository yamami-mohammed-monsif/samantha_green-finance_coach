import Section from "../UI/Section";
import Form from "../UI/Form";

const CTA = () => {
  return (
    <Section className="bg-mint-light py-6 md:py-10 md:rounded-full max-w-[950px] mx-auto">
      <div className="mb-6 md:mb-8">
        <h2>Ready to Feel In Control of Your Money?</h2>
        <p className="section-intro">
          Start with my free Budget Starter Kit built for creatives who want
          clarity, not spreadsheets.
        </p>
      </div>
      <Form />
    </Section>
  );
};

export default CTA;
