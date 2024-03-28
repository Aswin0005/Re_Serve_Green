const Home = () => {
  return (
    <div className="relative bg-[#083a33] w-full h-[100vh] ">
      <img
        src="Img/Ellipse_2_(1).svg"
        className="absolute w-[100vh] h-[100vh] right-0 opacity-40"
      ></img>
      <div className="bg-bg-pic bg-cover w-full h-full opacity-45"></div>
      <div className="absolute text-white text-8xl font-lato left-12 top-[30%] font-extrabold w-[40%]">
        <h3 className="leading-[100px]">
          Giving <span className="bg-[#14A856] px-3 ">Food</span> a Second life
        </h3>
        <p className="text-white text-xl italic font-[300] tracking-wider">
          Discover how our app transforms excess food into delicious meals for
          everyone
        </p>
      </div>
      <div className="absolute top-[20%] w-[35%] h-[70%] right-20">
        <img src="Img/Mainpg_pic(1).png" className="w-full h-full"></img>
      </div>
      <div className="relative w-[40%] left-12 bottom-[230px]">
        <input
          type="search"
          className=" rounded-full glass w-full px-7 py-[10px] placeholder-black placeholder-opacity-80"
          placeholder="Enter Your Location for nearby foods"
        ></input>
        <img
          src="Img/mouse-arrow.svg"
          className="absolute w-4 right-6 top-1/2 -translate-y-1/2"
        ></img>
      </div>
      <div className="relative flex gap-5 bottom-[200px] w-[40%] justify-center ">
        <div className="buttonHov w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
          <button>
            <img src="Img/restaurant-logo.svg" className="w-full"></img>
          </button>
        </div>
        <div className="buttonHov w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
          <button>
            <img src="Img/Cake_logo.svg" className="w-full"></img>
          </button>
        </div>
        <div className="buttonHov w-16 bg-[#E8DCC6] hover:bg-glassy rounded-2xl flex">
          <button>
            <img src="Img/Homemade_logo.svg" className="w-full"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
