import clsx from "clsx";
import Marker from "./Marker.jsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span
        className="
                    relative flex items-center min-h-[60px] px-4 rounded-2xl g4 overflow-hidden
                    before:bg-[linear-gradient(#1b275a,#0e1434)] before:absolute before:inset-0
                    before:opacity-0 before:transition-opacity
                    before:duration-500 before:content-[''] group-hover:before:opacity-100"
      >
        <span className=" absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className=" relative z-20 font-poppins text-[16px] font-bold leading-[24px] text-[#2EF2FF] uppercase">
          {children}
        </span>
      </span>

      <span
        className="
                    before:bg-[linear-gradient(to_right,transparent,#2ef2ff,transparent)]
                  before:absolute before:left-2/5 before:top-0 before:z-4 before:h-0.5 before:w-3/5
                  before:opacity-0 before:transition-all before:duration-500 before:content-['']
                  group-hover:before:left-4 group-hover:before:opacity-40

                  after:bg-[linear-gradient(to_right,transparent,#2ef2ff,transparent)]
                  after:absolute after:bottom-0 after:left-4 after:z-4 after:h-0.5 after:w-7/20
                  after:opacity-0 after:transition-all after:duration-500 after:content-['']
                  group-hover:after:left-3/5 group-hover:after:opacity-40
                  "
      />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
