import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-myFooter flex justify-center text-myFooterFont lg:mt-20">
      <p className="uppercase py-[15px] text-[14px] font-[Lato-Bold] pr-4 lg:pr-0 lg:text-[17px]">
        Lorem ipsum &copy;2021
      </p>
    </footer>
  );
};

export default Footer;
