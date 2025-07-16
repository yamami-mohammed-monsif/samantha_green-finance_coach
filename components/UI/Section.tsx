interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        px-5 md:px-8 lg:px-[100px]
        mb-10 md:mb-12 lg:mb-16
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}
