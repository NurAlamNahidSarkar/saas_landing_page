import clsx from "clsx";
import { useState } from "react";
import "react-slidedown/lib/slidedown.css";
import { SlideDown } from "react-slidedown";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  return (
    <div className="relative z-20 mb-16">
      <div
        className=" group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "text-[24px] font-medium leading-[36px] text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "before:absolute before:h-0.5 before:w-3 before:bg-p3 before:content-[''] after:absolute after:h-0.5 after:w-3 after:rotate-90 after:bg-p3 after:transition-all after:duration-500 after:content-[''] relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1",
          )}
        >
          <div className=" g4 size-11/12 rounded-full shadow-300"></div>
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          <div className="text-[16px] leading-[28px] tracking-[0.02em] px-7 py-3.5">
            {item.answer}
          </div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-10 rounded-3xl transition-opacity duration-500 opacity-0 absolute",
          active && "opacity-100",
        )}
      >
        <div className="absolute inset-0.5 rounded-3xl -z-10 g4"></div>
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};
export default FaqItem;
