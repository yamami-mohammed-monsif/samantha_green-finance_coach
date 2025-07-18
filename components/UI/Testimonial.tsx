import Image from "next/image";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const Testimonial = ({ image, name, role, text }: TestimonialProps) => {
  return (
    <div className="bg-lavender p-5 rounded-lg shadow-md max-w-[400px] mx-auto">
      <div className="flex flex-col items-center text-center gap-1">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="aspect-square rounded-full object-cover"
        />
        <div>
          <p className="text-sm md:text-base font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs md:text-sm text-gray-700">{role}</p>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <img src="/purple-stars.png" alt="five stars" />
      </div>
      <div className="relative">
        <img
          src="/quotes.png"
          alt="opening quote"
          className="w-4 h-4 absolute -top-2 -left-4"
        />
        <p className="text-gray-800 text-center">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
