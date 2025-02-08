import logo from "../assets/Images/logo-full.png";
import PatternTop from "../assets/Images/pattern-squiggly-line-top.svg";
function Header() {
  return (
    <>
      <div className="flex items-center justify-center mt-5 display:inline-block; position: relative">

        <div className="display:inline-block; position:absolute; ml-[340px]">
          <div className="flex items-center justify-center mt-5">
            <div className="flex gap-4">
              <img src={logo} alt="logo"/>
              <h5 className="text-xl font-bold pt-2">Coding conf</h5>
            </div>
          </div>

          <div className="flex items-center justify-center mt-7">
            <h1 className="text-5xl font-black text-center">
              Your Journey to Coding Conf 2025 starts Here!
            </h1>
          </div>

          <div className="flex items-center justify-center mt-10">
            <p className="text-center">
              Secure your spot at next year's biggest coding conference
            </p>
          </div>
        </div>

        <div>
          <img src={PatternTop} alt="Pattern" />
        </div>
      </div>
    </>
  );
}

export default Header;
