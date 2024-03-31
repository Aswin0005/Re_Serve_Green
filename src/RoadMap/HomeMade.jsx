const HomeMade = () => {
  return (
    <div className="relative h-[1000px]">
      <div className="absolute -top-[90%] right-0 ">
        <img src="Img/Vector 3.svg" className="w-[1000px]"></img>
      </div>

      {/* HomeMade Pic */}
      <div className="absolute right-0 w-[35%] top-[10%] -translate-y-1/2 ">
        <img src="Img/HomeMade_pic.png" className="w-full"></img>
      </div>

      {/* HomeMade Details */}
      <div className="flex flex-col absolute font-lato w-[30%] gap-7 leading-10 top-[8%] left-[12%] -translate-y-1/2">
        <p className="font-extrabold text-[60px] mx-auto">Home-Made</p>
        <p className="opacity-50 text-[18px] text-center leading-7">
          Experience homemade goodness delivered right to your doorstep with our
          app's delightful food services
        </p>
        <button
          className={`font-lato italic font-semibold bg-[#14A856] text-white rounded-xl h-10 w-24 mx-auto`}
        >
          Explore
        </button>
      </div>

      {/* Rounded Bars */}
      <div className="absolute flex justify-evenly items-center w-full bottom-[5%]">
        <div className="flex flex-col gap-7">
          <div className=" w-[450px] p-3 flex rounded-3xl shadow-2xl bg-gradient-to-l from-[#14A856] to-white">
            <div className="flex justify-center items-center w-[40%]">
              <img src="Img/QualityFood_pic.svg" className="w-[70%]"></img>
            </div>
            <div className="flex flex-col gap-1 font-lato items-center">
              <p className="font-semibold">Quality Food</p>
              <p className="opacity-50 text-[14px] text-center">
                Every dish boasts top-notch quality without sacrificing
                affordability
              </p>
            </div>
          </div>

          <div className="w-[450px] p-3 flex  rounded-3xl shadow-2xl bg-gradient-to-l from-[#14A856] to-white">
            <div className="flex justify-center items-center w-[40%]">
              <img src="Img/CustomerService_pic.svg" className="w-[60%]"></img>
            </div>
            <div className="flex flex-col gap-1 font-lato items-center">
              <p className="font-semibold">Quality Food</p>
              <p className="opacity-50 text-[14px] text-center">
                Every dish boasts top-notch quality without sacrificing
                affordability
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-md:hidden justify-center items-center h-[250px] w-[550px] bg-gradient-to-t from-[#14A856] to-white rounded-3xl shadow-2xl">
          <p className="font-lato font-extrabold text-center text-2xl">
            Choose Your Preference
          </p>
          <div className="flex w-[500px] justify-center">
            {/* Grab Yourself */}
            <div className="w-[150px] h-[150px] flex flex-col justify-center items-center">
              <div className="flex h-[50%] justify-center">
                <img src="Img/GoGrab_pic.png" className="w-[60%]"></img>
              </div>
              <p className="flex justify-center font-lato font-extrabold text-xl">
                Go-Grab
              </p>
            </div>

            {/* Delivery */}

            <div className="w-[150px] h-[150px] flex flex-col items-center justify-center">
              <div className="flex justify-center items-center h-[50%]">
                <img
                  src="Img/FoodDelivery_pic.png"
                  className="w-[90px] h-[70px]"
                ></img>
              </div>
              <p className="flex justify-center font-lato font-extrabold text-xl">
                Home-Delivery
              </p>
            </div>
          </div>
        </div>

        <div className="w-[200px] leading-[100px] max-xl:hidden xl:visible">
          <p className="font-lato font-extrabold text-[90px] text-center">
            For{' '}
            <span className="text-[110px] bg-gradient-to-b from-[#14A856] to-black bg-clip-text text-transparent">
              You
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMade;
