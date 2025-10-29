import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          {/* Left copy + Right mockup */}
          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_955px]">
            {/* LEFT */}
            <div className="relative mr-6">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  alt="xora"
                  width={160}
                  height={55}
                />
              </div>

              <p className="mb-10 max-w-md text-[22px] leading-[36px] text-p4/90">
                Try it now for free on iOS, Android, PC, Web – whatever your
                flavor, we’ve got you covered.
              </p>

              {/* 4 logos in one row; connector from the LAST one */}
              <ul className="relative mt-2 flex flex-nowrap items-center gap-6">
                {links.map(({ id, url, icon }, i) => (
                  <li
                    key={id}
                    className={
                      // connector line only from the last logo
                      i === links.length - 1
                        ? `relative after:absolute after:top-1/2 after:left-[calc(100%+16px)]
                           after:h-px after:w-[36vw] after:-translate-y-1/2 after:bg-s5 after:content-['']
                           max-lg:after:hidden`
                        : ""
                    }
                  >
                    <a
                      href={url}
                      className="group relative flex size-22 items-center justify-center
                                 rounded-half border-2 border-s3 bg-s1
                                 transition-[border-color,box-shadow] duration-500 hover:border-s4"
                    >
                      <span className="pointer-events-none absolute inset-1.5 rounded-half bg-s2 content-['']" />
                      <span className="pointer-events-none absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="pointer-events-none absolute size-13/20 object-contain opacity-60"
                      />
                      <span className="relative z-20 flex size-full items-center justify-center">
                        {icon}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: mockup pinned to the far right */}
            <div className="mb-10 max-md:hidden ml-auto">
              <div
                className="relative w-[955px] rounded-40 border-2 border-s5 p-6
                              before:absolute before:-top-0.5 before:right-6 before:h-0.5 before:w-[63.2%] before:bg-gradient-to-r before:from-transparent before:via-s5 before:to-transparent before:opacity-40 before:content-['']
                              after:absolute after:-bottom-0.5 after:left-6 after:h-0.5 after:w-[42.2%] after:bg-gradient-to-r after:from-transparent after:via-s5 after:to-transparent after:opacity-40 after:content-['']"
              >
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="absolute left-6 top-6 size-2.5 rounded-half bg-p2" />
                  <span className="absolute left-11 top-6 size-2.5 rounded-half bg-s3" />
                  <span className="absolute left-16 top-6 size-2.5 rounded-half bg-p1/15" />
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* partner logos (unchanged) */}
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
