const Works = () => {
  return (
    <div className="h-[100vh] w-full double-color">
      <div className="xl:w-[65%] lg:w-[60%] h-full mx-auto flex flex-col justify-around">
        {/* Main Text */}
        
        <div className="flex h-[30%] items-end justify-center text-[54px] font-lato font-semibold text-white">
          <h4 className="">
            <span className="text-[100px]">How</span> Re
            <span className="">-</span>
            <span className="text-black">serve Works</span>
          </h4>
        </div>

        <div className="relative w-full h-[70%] ">
          {/* Food pic */}
          <div className="absolute xl:max-w-full left-1/2 -translate-x-1/2 bottom-2">
            <img src="Img/Food_pic.png"></img>
          </div>

          {/* 1. Choose Your Location */}
          <div className="absolute bottom-[5%] left-[10%] flex flex-col w-42 justify-center items-center -translate-x-1/2">
            <div className="flex w-[70%] justify-center">
              <img src="Img/Location_pic.png" className="flex"></img>
            </div>
            <div className="flex items-center p-2 rounded-sm bg-[#03473D] text-white border-2 border-green-900 shadow-md">
              <p className="font-lato font-semibold">1. Choose Your Location</p>
            </div>
          </div>

          {/* 2. Pick a Food Category */}
          <div className="absolute bottom-[40%] left-[20%] flex flex-col w-42 justify-center items-center -translate-x-1/2">
            <div className="flex w-[70%] justify-center">
              <img src="Img/FoodCategory_pic.png"></img>
            </div>

            <div className="flex items-center p-2 rounded-sm bg-[#03473D] text-white border-2 border-green-900 shadow-md">
              <p className="font-lato font-semibold">2. Pick a Food Category</p>
            </div>
          </div>

          {/* 3.Indicate Pickup Preference */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col w-42 justify-center items-center">
            <div className="flex w-[70%] justify-center">
              <img src="Img/Pickup_pic.png"></img>
            </div>

            <div className="flex items-center p-2  rounded-sm border-gray-200 border-2 how-step shadow-md">
              <p className="font-lato font-semibold part-col">
                3. Indicate Pick up Preference{' '}
              </p>
            </div>
          </div>

          {/* 4.Complete Payment */}
          <div className="absolute bottom-[40%] right-[20%] flex flex-col w-42  justify-center items-center translate-x-1/2">
            <div className="flex w-[70%] justify-center">
              <img src="Img/Payment_pic.png"></img>
            </div>

            <div className="flex items-center p-2 rounded-sm border-gray-200 border-2 shadow-md">
              <p className="font-lato font-semibold">4. Complete Payment</p>
            </div>
          </div>

          {/* 5. Savour your Meal */}
          <div className="absolute bottom-[5%] right-[10%] flex flex-col w-42 justify-center items-center translate-x-1/2">
            <div className="flex w-[80%] justify-center">
              <img src="Img/EnjoyMeal_pic.png"></img>
            </div>
            <div className="flex items-center p-2 rounded-sm border-gray-200 border-2 shadow-md">
              <p className="font-lato font-semibold">5. Savour Your Meal</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=""> */}

      {/* </div> */}
    </div>
  );
};

export default Works;
