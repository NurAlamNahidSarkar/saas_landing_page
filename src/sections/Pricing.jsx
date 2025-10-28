import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.js";
import Button from "../components/Button.jsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          {/* PRICING HEADER */}
          <div
            className="max-w-960 before:absolute before:-bottom-44 before:left-1/5 before:h-96
                        before:w-13/20 before:bg-s4/50 before:blur-[200px] before:content-[''] relative
                        mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none
                        max-md:pb-32 max-md:pt-16"
          >
            <h3
              className="text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-lg:text-[40px]
                          max-lg:leading-[52px] max-md:leading-[40px]
                          max-md:text-[32px] z-30 relative mx-auto mb-14 max-w-lg text-center
                          text-p4 max-md:mb-11 max-sm:max-w-sm"
            >
              Flexible Pricing for Teams of All Sizes
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
                  !monthly && "text-p4",
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "bg-[linear-gradient(#253575, #162561)] rounded-14 before:h-100 before:absolute before:-top-16 before:left-9 before:right-9 before:bg-s4 before:blur-xl before:content-[''] absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              />
            </div>

            <div className="pointer-events-none absolute -bottom-16 left-[calc(50%-480px)] z-2 mx-auto w-960">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-20"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="scroll-hide relative z-20 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="relative xl:w-[calc(33.33%+2px)] max-xl:min-w-80 max-lg:rounded-3xl"
              >
                {/* Two-tone gradient background only for middle card */}
                {index === 1 && (
                  <>
                    <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_bottom,#1b275a_0%,#253575_100%)] z-0" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-[#2ef2ff33] blur-[100px] rounded-full z-0" />
                  </>
                )}

                {/* Card container */}
                <div
                  className={clsx(
                    "relative border-2 p-7 overflow-visible rounded-3xl flex flex-col items-center",
                    index === 1
                      ? "border-s4"
                      : "odd:border-s3 odd:bg-s1 lg:odd:mt-12 even:border-s4 even:bg-s1",
                  )}
                >
                  {/* Top logo */}
                  <div
                    className={clsx(
                      "absolute left-0 right-0 z-20 flex items-center justify-center",
                      index === 1 ? "-top-6" : "-top-6 xl:-top-11",
                    )}
                  >
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={clsx(
                        "object-contain drop-shadow-2xl",
                        index === 1 ? "size-[120px]" : "size-[88px]",
                      )}
                    />
                  </div>

                  {/* Title */}
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1
                        ? "border-p3 text-p3  mt-20"
                        : "border-p1 text-p1  mt-10",
                    )}
                  >
                    {plan.title}
                  </div>

                  {/* Price */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div
                      className={clsx(
                        "font-inter text-[72px] font-bold leading-[84px] flex items-center",
                        index === 1 ? "text-p3" : "text-p4",
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="ml-2 text-[16px] uppercase text-p4">
                      /mo
                    </div>
                  </div>

                  {/* Caption */}
                  <div
                    className={clsx(
                      "text-[22px] leading-[36px] relative z-10 mb-10 w-full pb-9 text-center text-p4 border-b",
                      index === 1 ? "border-s2" : "border-b-amber-50",
                    )}
                  >
                    {plan.caption}
                  </div>

                  {/* Features */}
                  <ul className="relative z-10 mx-auto space-y-4 xl:px-7">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="relative flex items-center gap-5">
                        <img
                          src="/images/check.png"
                          alt="check"
                          className="size-10 object-contain"
                        />
                        <p className="flex-1">{feature}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-10 flex w-full justify-center">
                    <Button icon={plan.icon}>Get Started</Button>
                  </div>
                  {index === 1 && (
                    <p className="relative z-30 mt-5 text-center text-[#C8EA80] text-[13px] font-semibold uppercase tracking-[0.05em] before:mx-2 before:content-['—'] after:mx-2 after:content-['—']">
                      Limited time offer
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
