import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="text-[12px] font-semibold leading-[18px] tracking-[0.03em] flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, JS Mastery</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="after:absolute after:-right-5 after:top-[calc(50%-1px)] after:h-0.5 after:w-0.5 after:rounded-half after:bg-p2 after:content-[''] relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
