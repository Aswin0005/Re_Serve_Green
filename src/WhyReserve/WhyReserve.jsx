const WhyReServe = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute w-1/2 right-0">
        <img src="Img/Ellipse 3.png" className=""></img>
      </div>
      <p className="absolute left-12 top-1/4 -translate-y-1/4 xl:text-[128px] lg:text-[95px] font-lato font-semibold">
        Why <span className="xl:text-[80px] lg:text-[55px]">Re-Serve?</span>
      </p>
      <div className="absolute flex xl:w-[700px] xl:h-[350px] lg:w-[600px] lg:h-[300px]  bg-bg-lines bottom-0 bg-cover justify-center">
        <div className="absolute xl:w-[600px] xl:h-[300px] lg:w-[500px] lg:h-[250px]  rounded-tr-full rounded-tl-full bg-[#03473D] opacity-45 bottom-0"></div>
        <img src="Img/WomenSmiling_pic.png" className="h-full z-10"></img>
      </div>

      {/* Why reasons */}

      <div className="absolute flex right-[5%] h-full w-[45%] items-center justify-center gap-3">
        {/* Reasons Part 1 */}
        <div className="flex flex-col gap-7 mt-[20%] w-[50%] justify-center items-center">
          <div className="flex w-full h-[50%] gap-5">
            <div className="flex justify-center items-center w-[50%]">
              <img src="Img/Food_waste_pic.png" className=""></img>
            </div>
            <div className="flex flex-col gap-1 font-lato">
              <p className="font-semibold xl:text-[16px] lg:text-[12px]">
                Reducing Food Waste
              </p>
              <p className="opacity-50 xl:text-[14px] lg:text-[10px]">
                By using our platform,Every purchase you make through our app
                means one less meal getting wasted.
              </p>
            </div>
          </div>

          <hr className="border-2 w-[70%] mx-7 border-black opacity-50 rounded-full"></hr>

          <div className="flex w-full h-[50%] gap-5">
            <div className="flex justify-center items-center w-[50%]">
              <img src="Img/Transparancy_pic.png" className=""></img>
            </div>
            <div className="flex flex-col gap-1 font-lato ">
              <p className="font-semibold xl:text-[16px] lg:text-[12px]">
                Transparency
              </p>
              <p className="opacity-50 xl:text-[14px] lg:text-[10px]">
                Our platform offers full transparency on food details,
                empowering informed choices.
              </p>
            </div>
          </div>
        </div>

        <div className="opacity-50 rounded-full border-black border-l-4 border-solid h-[50%] mt-[20%] "></div>
        {/* Reasons part 2 */}

        <div className="flex flex-col gap-7 w-[50%] justify-center items-center">
          <div className="flex w-full h-[50%] gap-5">
            <div className="flex justify-center items-center w-[50%]">
              <img src="Img/CostSavings_pic.png" className=""></img>
            </div>
            <div className="flex flex-col gap-1 font-lato ">
              <p className="font-semibold xl:text-[16px] lg:text-[12px]">
                Cost Savings
              </p>
              <p className="opacity-50 xl:text-[14px] lg:text-[10px]">
                Save money on delicious meals from your favorite local
                restaurants and stores.
              </p>
            </div>
          </div>
          <hr className="border-2 w-[70%] mx-7 border-black opacity-50 rounded-full"></hr>
          <div className="flex w-full h-[50%] gap-5">
            <div className="flex justify-center items-center w-[50%]">
              <img src="Img/Convenience_pic.png" className="w-[60%]"></img>
            </div>
            <div className="flex flex-col gap-1 font-lato ">
              <p className="font-semibold xl:text-[16px] lg:text-[12px]">
                Convenience
              </p>
              <p className="opacity-50 xl:text-[14px] lg:text-[10px]">
                With our easy-to-use app, find surplus food near you, place your
                order, and pick up your meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyReServe;
