import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className=" relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400 ">
      <Element name=" hero">
        <div className=" mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className=" relative z-20 max-w-[512] max-lg:max-w-[388]">
            <div className="small-2 mb-5 uppercase text-[#C8EA80] ">
              Video Editing
            </div>
            <h1 className="mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em] text-[#EAEDFF] uppercase max-lg:mb-7  max-md:mb-4 max-md:text-5xl max-lg:leading-12">
              Amazingly Simple
            </h1>
            <p className=" max-w-[440px] mb-14 text-[22px] leading-[36px] max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful
            </p>
            <LinkScroll to=" feature" offset={-100} spy smooth>
              <Button icon={"/images/zap.svg"}> Try it now</Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
