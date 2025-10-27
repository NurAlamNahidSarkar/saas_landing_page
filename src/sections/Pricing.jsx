import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="Pricing">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div
            className=" max-w-960 before:absolute before:-bottom-44 before:left-1/5 before:h-96
                            before:w-13/20 before:bg-s4/50 before:blur-[200px] before:content-[''] relative
                            mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none
                            max-md:pb-32 max-md:pt-16"
          >
            <h3
              className=" text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-lg:text-[40px]
                            max-lg:leading-[52px] max-md:leading-[40px]
                            max-md:text-[32px] z-30 relative mx-auto mb-14 max-w-lg text-center
                            text-p4 max-md:mb-11 max-sm:max-w-sm"
            >
              Flexible pricing for teams of all sizes
            </h3>

            <div
              className="relative z-40 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25
                            bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]"
            >
              <button
                className={clsx(
                  "text-[16px] font-bold leading-[24px] relative z-20 h-16 flex-1 uppercase text-p5 transition-colors duration-500 hover:text-p4",
                  monthly && "text-p4",
                )}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx(
                  "text-[16px] font-bold leading-[24px] relative z-20 h-16 flex-1 uppercase text-p5 transition-colors duration-500 hover:text-p4",
                  monthly && "text-p4",
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  " bg-[linear-gradient(#253575, #162561)] rounded-14 before:h-100 before:absolute before:-top-16 before:left-9 before:right-9 before:bg-s4 before:blur-xl before:content-[''] absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
