import { Element } from "react-scroll";
import { features } from "../constants/index.js";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div
            className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl
                          md:overflow-hidden max-md:flex-col

                          after:bg-[linear-gradient(rgba(196, 203, 245, 0.5), transparent)] after:absolute after:right-0 after:top-0 after:h-full after:w-1/2
                          after:mix-blend-soft-light after:content-[''] max-md:after:hidden

                          md:bg-[linear-gradient(#1b275a, #0e1434)] max-md:border-none
                          max-md:rounded-none max-md:gap-3"
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className=" relative z-20 md:px-10 px-5 md:pb-10 pb-5 flex-50
                max-md:bg-[linear-gradient(#1b275a,#0e1434)] max-md:border-2
                max-md:border-[#334679] max-md:rounded-3xl max-md:flex-320"
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
