import mainLogo from "../img/image.png";

const Header = (): JSX.Element => {
  return (
    <div className="lg:ml-[170px]">
      <div className="px-7 mt-[40px] font-['Lato-Regular'] text-[35px]/[43px] md:text-4xl lg:mt-[111px] lg:text-6xl/[80px]">
        <h2>
          <p>
            Episodes of the <strong className="font-['Lato-Bold']">4th</strong>
          </p>
          <p className="">season of the series</p>
          <strong className="text-[38px] text-myBlue font-['Lato-Bold'] lg:text-[68px]/[30px]">
            Rick and Morty
          </strong>
        </h2>

        <img
          src={mainLogo}
          alt="Rick and Morty"
          className="mt-[47px] pr-2 lg:mt-6"
        ></img>
      </div>
    </div>
  );
};

export default Header;
