const Works = () => {
    return (
      <div className="relative h-[100vh] w-full double-color">
        <div className="bg-img"></div>
        <div className="absolute top-[15%] text-[60px] font-lato font-semibold left-[50.7%] -translate-x-1/2 text-white">
          <h4 className="">
            <span className="text-[100px]">How</span> Re
            <span className="">-</span>
            <span className="text-black">serve Works</span>
          </h4>
        </div>
        <div className="absolute w-[30%] left-1/2 -translate-x-1/2 bottom-2">
          <img src="Img/Food_pic.png"></img>
        </div>

        {/* 1. Choose Your Location */}
        <div className="absolute bottom-10 left-[22%] flex flex-col w-42 h-40 justify-center items-center">
          <img
            src="Img/Location_pic.png"
            className="flex w-[50%] h-[50%]"
          ></img>
          <div className="flex items-center p-2 rounded-sm bg-[#03473D] text-white border-2 border-green-900 shadow-md">
            <p className="font-lato font-semibold">1. Choose Your Location</p>
          </div>
        </div>

        {/* 2. Pick a Food Category */}
        <div className="absolute bottom-44 left-[29%] flex flex-col w-42 h-40 justify-center items-center">
          <img
            src="Img/FoodCategory_pic.png"
            className="flex w-[50%] h-[35%]"
          ></img>
          <div className="flex items-center p-2 rounded-sm bg-[#03473D] text-white border-2 border-green-900 shadow-md">
            <p className="font-lato font-semibold">2. Pick a Food Category</p>
          </div>
        </div>

        {/* 3.Indicate Pickup Preference */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 flex flex-col w-42 h-40 justify-center items-center">
          <img src="Img/Pickup_pic.png" className="flex w-[40%] h-[50%] "></img>
          <div className="flex items-center p-2  rounded-sm border-gray-200 border-2 how-step shadow-md">
            <p className="font-lato font-semibold part-col">
              3. Indicate Pick up Preference{' '}
            </p>
          </div>
        </div>

        {/* 4.Complete Payment */}
        <div className="absolute bottom-44 right-[29%] flex flex-col w-42 h-40 justify-center items-center">
          <img src="Img/Payment_pic.png" className="flex w-[60%] h-[35%]"></img>
          <div className="flex items-center p-2 rounded-sm border-gray-200 border-2 shadow-md">
            <p className="font-lato font-semibold">4. Complete Payment</p>
          </div>
        </div>

        {/* 5. Savour your Meal */}
        <div className="absolute bottom-10 right-[24%] flex flex-col w-42 h-40 justify-center items-center">
          <img
            src="Img/EnjoyMeal_pic.png"
            className="flex w-[55%] h-[40%]"
          ></img>
          <div className="flex items-center p-2 rounded-sm border-gray-200 border-2 shadow-md">
            <p className="font-lato font-semibold">5. Savour Your Meal</p>
          </div>
        </div>
      </div>
    );
}

export default Works