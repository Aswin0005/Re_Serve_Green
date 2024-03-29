const WhyReServe = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute w-1/2 right-0">
        <img src="Img/Ellipse 3.png" className=""></img>
      </div>
      <p className="absolute left-12 top-1/4 -translate-y-1/4 text-[128px] font-lato font-semibold">
        Why <span className="text-[80px]">Re-Serve?</span>
      </p>
      <div className="absolute flex w-1/2 h-[50%] bg-bg-lines bottom-0 bg-cover justify-center">
        <div className="absolute w-[600px] h-[300px] semi-circle bg-[#03473D] opacity-45 bottom-0"></div>
        <img src="Img/WomenSmiling_pic.png" className="h-full z-10"></img>
      </div>

      {/* Why reasons */}
      <div className="absolute flex flex-col gap-7 right-[30%] top-1/2">
        <div className="w-[300px] flex">
          <div className="flex justify-center items-center w-56">
            <img src="Img/Food_waste_pic.png" className=""></img>
          </div>
          <div className="flex flex-col gap-1 font-lato ">
            <p className="font-semibold">Reducing Food Waste</p>
            <p className="opacity-50 text-[14px]">
              By using our platform,Every purchase you make through our app
              means one less meal getting wasted.
            </p>
          </div>
        </div>
        <hr className="border-2 w-[250px] mx-7 border-black opacity-50 rounded-full"></hr>
        <div className="w-[300px] flex">
          <div className="flex justify-center items-center w-56">
            <img src="Img/Transparancy_pic.png" className="w-[60%]"></img>
          </div>
          <div className="flex flex-col gap-1 font-lato ">
            <p className="font-semibold">Transparency</p>
            <p className="opacity-50 text-[14px]">
              Our platform offers full transparency on food details, empowering
              informed choices.
            </p>
          </div>
        </div>
      </div>

        <div className="absolute opacity-50 rounded-full border-black border-l-4 border-solid h-[500px] right-[27%] top-1/4 "></div>
      {/* Reasons part 2 */}
      <div className="absolute flex flex-col gap-7 right-[5%] top-[35%]">
        <div className="w-[300px] flex">
          <div className="flex justify-center items-center w-56">
            <img src="Img/CostSavings_pic.png" className=""></img>
          </div>
          <div className="flex flex-col gap-1 font-lato ">
            <p className="font-semibold">Cost Savings</p>
            <p className="opacity-50 text-[14px]">
              Save money on delicious meals from your favorite local restaurants
              and stores.
            </p>
          </div>
        </div>
        <hr className="border-2 w-[250px] mx-7 border-black opacity-50 rounded-full"></hr>
        <div className="w-[300px] flex">
          <div className="flex justify-center items-center w-56">
            <img src="Img/Convenience_pic.png" className="w-[60%]"></img>
          </div>
          <div className="flex flex-col gap-1 font-lato ">
            <p className="font-semibold">Convenience</p>
            <p className="opacity-50 text-[14px]">
              With our easy-to-use app, find surplus food near you, place your
              order, and pick up your meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyReServe;
