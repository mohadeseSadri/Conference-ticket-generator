function Inputs() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <div>
            <p className=" mt-5">Full Name</p>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
              />
            </div>
          </div>

          <div>
            <p className="mt-5">Email Address</p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <p className=" mt-5">GitHub Username</p>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="w-[450px] bg-transparent border-2 border-gray-500 border-raduce rounded-lg px-2 py-1"
                placeholder="@yourusername"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button type="button" className="w-[450px] bg-orange-600 mt-8 rounded-lg px-6 py-2">
              Generate My Ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputs;
