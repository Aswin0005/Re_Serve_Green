const RoadMap = () => {
  return (
    <div className="relative h-[400vh] overflow-hidden">
      {/* RoadMap Images */}
      <div className="absolute -top-7 ">
        <img src="Img/Vector 1.svg" className=""></img>
      </div>
      <div className="absolute top-[5%] w-[1000px] ">
        <img src="Img/Vector 2.svg"></img>
      </div>
      <div className="absolute top-[36%] right-0 w-[1000px]">
        <img src="Img/Vector 3.svg"></img>
      </div>

      {/* Buildings Details */}
      {/* Restaurant */}
      <div className="absolute z-10 right-[10%] top-[8%] w-[600px]">
        <img src="Img/Restaurant_pic.png"></img>
      </div>

      {/* About Restaurants */}
      <div className="flex flex-col absolute font-lato w-[400px] gap-7 leading-10 top-[14%] left-[8%]">
        <p className="font-extrabold text-[60px] mx-auto">Restaurant</p>
        <p className="opacity-50 text-[18px] text-center leading-7">
          Discover delectable dining options from nearby restaurants with our
          app at your fingertips.
        </p>
        <button
          className={`font-lato italic font-semibold bg-[#14A856] text-white rounded-xl h-10 w-24 mx-auto`}
        >
          Explore
        </button>
      </div>

      <div className="flex flex-col absolute font-lato w-[400px] leading-[35px] top-[23%] left-[50%] -translate-x-1/2">
        <p className="text-[25px] font-extrabold">Service By</p>
        <p className="font-extrabold text-[45px]">Re-Serve</p>
      </div>

      {/* Bakery */}
      <div className="absolute z-10 left-[7%] top-[30%] w-[600px]">
        <img src="Img/Bakery.png" className="w-full"></img>
      </div>

      <div className="flex flex-col absolute font-lato w-[400px] gap-7 leading-10 top-[37%] right-[12%]">
        <p className="font-extrabold text-[60px] mx-auto">Bakeries</p>
        <p className="opacity-50 text-[18px] text-center leading-7">
          Experience a world of delicious possibilities with our app, bringing
          bakery delights right to your fingertips.
        </p>
        <button
          className={`font-lato italic font-semibold bg-[#14A856] text-white rounded-xl h-10 w-24 mx-auto`}
        >
          Explore
        </button>
      </div>

      {/* HomeMade */}

      <div className="absolute z-10 right-[5%] top-[67%] w-[600px]">
        <img src="Img/HomeMade_pic.png" className="w-full"></img>
      </div>

      <div className="flex flex-col absolute font-lato w-[400px] gap-7 leading-10 top-[67%] left-[12%]">
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

      {/* Rounded Bars after roadMap */}
      <div className="absolute flex bottom-12 gap-16 left-12 justify-center items-center">
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

        <div className="flex flex-col justify-center items-center h-[250px] w-[550px] bg-gradient-to-t from-[#14A856] to-white rounded-3xl shadow-2xl">
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
      </div>

      <div className="absolute bottom-20 right-28 w-[200px] leading-[100px]">
        <p className="font-lato font-extrabold text-[90px] text-center">
          For{' '}
          <span className="text-[110px] bg-gradient-to-b from-[#14A856] to-black bg-clip-text text-transparent">
            You
          </span>
        </p>
      </div>
    </div>
  );
};

export default RoadMap;
