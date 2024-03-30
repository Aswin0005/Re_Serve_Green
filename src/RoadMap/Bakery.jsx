const Bakery = () => {
    return (
      <div className="relative h-[1000px]">
        <div className="absolute -top-[90%]">
          <img src="Img/Vector 2.svg" className="w-[1000px]"></img>
        </div>
        {/* Bakery Img */}
        <div className="absolute left-[8%] top-[30%] w-[600px] -translate-y-1/2">
          <img src="Img/Bakery.png" className="w-full"></img>
        </div>

        {/* Bakery Details */}
        <div className="flex flex-col absolute font-lato w-[400px] gap-7 leading-10 top-[30%] right-[10%] -translate-y-1/2">
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
      </div>
    );
}

export default Bakery;