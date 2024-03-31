const Restaurant = () => {
    return (
      <div className="relative h-[985px]">
        <div className="absolute -top-7">
          <img src="Img/Vector 1.svg" className=""></img>
        </div>
        {/* Restaurant Img */}
        <div className="absolute right-[8%] top-[40%] w-[40%] -translate-y-1/2">
          <img src="Img/Restaurant_pic.png"></img>
        </div>

        {/* About Restaurants */}
        <div className="flex flex-col absolute font-lato w-[30%] gap-7 leading-10 top-[50%] left-[5%] -translate-y-1/2">
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

        <div className="flex flex-col absolute font-lato w-[30%] leading-[35px] bottom-[25%] left-[55%] -translate-x-1/2">
          <p className="text-[25px] font-extrabold">Service By</p>
          <p className="font-extrabold text-[45px]">Re-Serve</p>
        </div>
      </div>
    );
}

export default Restaurant;