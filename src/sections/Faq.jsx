import { Element } from "react-scroll";
import { faq } from "../constants/index.js";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className=" mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 relative z-20 py-28">
          <div>
            <h3
              className="text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-md:text-[32px]
                            max-md:leading-[40px]  max-w-640 max-lg:max-w-md mb-7 text-p4"
            >
              Curiosity didn't kill the cat, it gave it answers
            </h3>
            <p className="text-[22px] leading-[36px] max-lg:max-w-sm">
              You've got questions, we've got answers
            </p>
          </div>
          <div
            className="after:absolute after:-top-1.5 after:left-[calc(50%-5px)] after:z-4
                          after:size-2.5 after:rounded-half after:border-2 after:border-s2
                          after:bg-s1 after:content-[''] w-0.5 h-full absolute left-[calc(50%-1px)]
                          top-0 -z-10 bg-s2"
          />
        </div>

        <div
          className="before:absolute before:left-[calc(50%-160px)] before:top-[-160px]
                        before:size-[320px] before:bg-s4/25 before:mix-blend-soft-light
                        before:blur-[200px] before:content-[''] relative z-20 border-2 border-s2 bg-s1"
        >
          <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 flex gap-10 max-lg:block">
            <div
              className=" rounded-half absolute -top-10 left-[calc(50%-40px)] z-40 flex size-20
                            items-center justify-center border-2 border-s2 bg-s1"
            >
              <img
                src=" /images/faq-logo.svg"
                alt="logo"
                className="size-1/2"
              />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={faq.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={faq.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div
            className=" after:absolute after:-top-1.5 after:left-[calc(50%-5px)] after:z-4
                            after:size-2.5 after:rounded-half after:border-2 after:border-s2
                            after:bg-s1 after:content-[''] absolute left-[calc(50%-1px)] top-0
                            -z-10 h-full w-0.5 bg-sky-200 max-lg:hidden"
          />
        </div>
      </Element>
    </section>
  );
};
export default Faq;
