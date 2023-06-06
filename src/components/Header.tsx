import mainLogo from "../img/image.png";

const Header = (): JSX.Element => {
  return (
    <header className="px-7 mt-[40px] font-['Lato-Regular'] text-[35px]/[43px]">
      <h2>
        <p>
          Episodes of the <strong className="font-['Lato-Bold']">4th</strong>
        </p>
        <p>season of the series</p>
        <strong className="text-[38px] text-myBlue font-['Lato-Bold']">
          Rick and Morty
        </strong>
      </h2>

      <img src={mainLogo} alt="Rick and Morty" className="mt-11 pr-2"></img>
    </header>
  );
};

export default Header;
