import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div
            className="relative flex flex-wrap border-2 border-s3 rounded-7xl
                        md:overflow-hidden max-md:flex-col
                        after:bg-[linear-gradient(rgba(196,203,245,0.5),transparent)]
                        after:absolute after:right-0 after:top-0 after:h-full after:w-1/2
                        after:mix-blend-soft-light after:content-[''] max-md:after:hidden
                        md:bg-[linear-gradient(#1b275a,#0e1434)] max-md:border-none
                        max-md:rounded-none max-md:gap-3"
          >
            {features.map(
              ({ id, icon, caption, title, text, button }, index) => (
                <div
                  key={id}
                  className={`relative z-20 md:px-10 px-5 md:pb-10 pb-5
                            max-md:bg-[linear-gradient(#1b275a,#0e1434)]
                            max-md:border-2 max-md:border-[#334679]
                            max-md:rounded-3xl
                            ${
                              index < 2
                                ? "md:w-1/2 md:border-r-2 md:border-[#334679]"
                                : "md:w-full md:border-t-2 md:border-[#334679]"
                            }`}
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="-ml-3 mb-12 flex justify-center items-center flex-col">
                      <div className="w-0.5 h-16 bg-[#334679]" />
                      <img
                        src={icon}
                        alt={title}
                        className="size-28 object-contain"
                      />
                    </div>
                  </div>

                  <p className="small-2 mb-5 uppercase text-[#C8EA80] max-md:mb-6">
                    {caption}
                  </p>
                  <h2
                    className="max-w-[400px] mb-7 text-[48px] font-semibold leading-[56px] tracking-[-0.02em]
                             text-[#EAEDFF] max-md:mb-6"
                  >
                    {title}
                  </h2>
                  <p className="mb-11 text-[22px] leading-[36px] max-md:mb-8 max-md:text-[16px] tracking-[0.02em] max-md:leading-[28px]">
                    {text}
                  </p>
                  <Button icon={button.icon}>{button.title}</Button>
                </div>
              ),
            )}

            <ul className="relative flex flex-row justify-around flex-grow px-[5%] border-2 border-[#334679] rounded-7xl max-md:hidden">
              <div className="absolute bg-[#334679]/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className=" absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div
                    className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full
                                hover:border-s4 transition-all duration-500 shadow-500 size-20"
                  >
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3
                    className="relative z-20 max-w-36 mx-auto my-0 text-[14px]
                                font-semibold leading-[18px] tracking-[0.03em] text-center uppercase"
                  >
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
