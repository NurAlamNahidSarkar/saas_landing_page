import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 block lg:flex">
        <div className="max-2xl:mr-6 max-xl:mr-3 max-lg:mx-auto max-lg:mb-36 max-lg:max-w-330 max-lg:text-center max-md:mb-24 max-md:max-w-52 relative z-2 mr-20 flex-300">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.3em] mb-5 uppercase text-p3 max-md:mb-2.5">
            Wall of Love
          </p>
          <h3 className="text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-md:h5 text-p4">
            Words from our fans
          </h3>
        </div>

        <div className="after:pointer-events-none after:absolute after:-bottom-52 after:left-[calc(50%-1px)] after:h-24 after:w-0.5 after:bg-s5 after:content-[''] after:max-lg:-bottom-24 after:max-md:hidden before:pointer-events-none before:absolute before:-top-28 before:left-[calc(50%-1px)] before:h-[calc(100%+218px)] before:w-0.5 before:bg-s2 before:content-[''] before:max-lg:top-0 before:max-lg:h-full before:max-md:hidden relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="after:pointer-events-none after:absolute after:-bottom-[212px] after:left-[calc(50%-5px)] after:z-2 after:size-2.5 after:rounded-half after:border-2 after:border-s5 after:bg-s1 after:content-[''] max-lg:after:-bottom-[102px] max-md:after:hidden flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
