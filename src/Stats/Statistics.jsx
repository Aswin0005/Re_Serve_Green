const Statistics = () => {
    return (
      <div className="relative h-[100vh] bg-[#F5F5F5] ">
        <div className="relative h-[55%] w-[60%] bg-white shadow-2xl rounded-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-world font-lato font-extrabold">
          {/* Center Text */}

          <p className="absolute text-8xl w-[350px] leading-[40px] text-center top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 ">
            Some <span className="text-5xl">Numbers </span>
            <span className="text-xl">That Matter</span>
          </p>

          <p className="absolute text-7xl w-[220px] leading-[1px] text-center top-[8%] left-[30%] ">
            <span className="text-3xl">74 Million Tons </span>
            <span className="text-lg">Food wasted every year</span>
          </p>

          <p className="absolute text-7xl w-[180px] leading-[1px] text-center top-[32%] left-[6%] ">
            <span className="text-3xl">One-Third </span>
            <span className="text-lg">Food wasted Globally</span>
          </p>

          <p className="absolute text-7xl w-[220px] leading-[1px] text-center top-[60%] left-[7%] ">
            <span className="text-3xl">20 - 30%</span>
            <span className="text-lg">Foods in restaurant wasted</span>
          </p>

          <p className="absolute text-7xl w-[180px] leading-[1px] text-center bottom-[8%] left-[35%] ">
            <span className="text-3xl">One-Third </span>
            <span className="text-lg">Food wasted Globally</span>
          </p>
        </div>

        <div className="absolute bottom-1 left-0">
            <img src="Img/WasteDrink_pic.png"></img>
        </div>

        <div className="absolute top-[10%] right-28">
            <img src="Img/WasteBottles_pic.png"></img>
        </div>
      </div>
    );
}

export default Statistics;