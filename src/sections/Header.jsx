import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";

const NavLink = ({ title }) => (
  <LinkScroll className="text-[16px] font-bold leading-[24px] uppercase transition-colors duration-500 cursor-pointer hover:text-[#2EF2FF] max-lg:my-4 max-lg:h-5">
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 ">
      <div
        className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4;
                            flex h-14 items-center"
      >
        <a className="lg:hidden flex-1 cursor-pointer z-20">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0C1838] max-lg:opacity-0 ",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div
            className="w-full max-lg:relative max-lg:flex max-lg:flex-col
                                    max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden
                                    max-lg:before:absolute max-lg:before:-right-64 max-lg:before:top-2/5
                                    max-lg:before:h-[440px] max-lg:before:w-[252px] max-lg:before:bg-s4
                                    max-lg:before:blur-[200px] max-lg:before:content-[''] max-md:px-4"
          >
            <nav className="max-lg:relaive max-lg:z-20 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="features" />
                  <div className="size-1.5 rounded-full bg-p2 max-lg:hidden" />
                  <NavLink title="pricing" />
                </li>

                <li className="relative flex flex-1 items-center justify-center">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      className="logo"
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="faq" />
                  <div className="size-1.5 rounded-full bg-p2 max-lg:hidden" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-20"
              />

              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className=" lg:hidden z-20 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
