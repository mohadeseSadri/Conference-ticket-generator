import logo from "../assets/logo-full.png";
function Header() {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="flex gap-4">
          <img src={logo} alt="logo w-[200px] h-[100px]" />
          <h5 className="text-xl font-bold pt-2">Coding conf</h5>
        </div>
      </div>

      <div className="flex items-center justify-center mt-7">
        <h1 className="text-5xl font-black text-center">
          Your Journey to Coding Conf  2025 starts Here!
        </h1>
      </div>

      <div className="flex items-center justify-center mt-10">
        <p className="text-center">
          Secure your spot at next year's biggest coding conference
        </p>
      </div>
    </>
  );
}

export default Header;
