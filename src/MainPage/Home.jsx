const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-all">
      {/* Ellipse Bg-img */}

      <img
        src="Img/Ellipse_2_(1).svg"
        className="absolute w-[100vh] h-[100vh] right-0 opacity-40"
      ></img>
      {/* Main Plate Img */}
      <div className="absolute sm:max-w-[40%] right-[5%] top-[55%] -translate-y-1/2">
        <img src="Img/Mainpg_pic(1).png" className="w-full h-full"></img>
      </div>

      {/* Left Contents */}

      <div className="relative md:w-[300px] lg:w-[450px] xl:w-[550px] flex-col flex gap-4 left-12 top-[55%] -translate-y-1/2">

        {/* Main Text */}

        <div className="text-white md:text-5xl lg:text-7xl xl:text-8xl font-lato font-extrabold flex-col">
          <h3 className="xl:leading-[100px]">
            Giving <span className="bg-[#14A856] px-2 ">Food</span> a Second
            life
          </h3>
          <p className="text-white md:text-sm text-xl italic font-[300] tracking-wider">
            Discover how our app transforms excess food into delicious meals for
            everyone
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="search"
            className=" rounded-full glass w-full px-7 lg:py-[10px] md:py-[5px]  placeholder-black placeholder-opacity-80"
            placeholder="Enter Your Location for nearby foods"
          ></input>
          <img
            src="Img/mouse-arrow.svg"
            className="absolute w-4 right-6 top-1/2 -translate-y-1/2"
          ></img>
        </div>

        {/* Services Buttons */}
        <div className=" flex gap-5 justify-center ">
          <div className="buttonHov md:w-12 lg:w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
            <button>
              <img src="Img/restaurant-logo.svg" className="w-full"></img>
            </button>
          </div>
          <div className="buttonHov md:w-12 lg:w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
            <button>
              <img src="Img/Cake_logo.svg" className="w-full"></img>
            </button>
          </div>
          <div className="buttonHov md:w-12 lg:w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
            <button>
              <img src="Img/Homemade_logo.svg" className="w-full"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
