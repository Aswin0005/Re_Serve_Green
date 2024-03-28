const Home = () => {
  return (
    <div className="relative bg-[#083a33] w-full h-[100vh] ">
      <img
        src="/Img/Ellipse 2 (1).svg"
        className="absolute w-[100vh] h-[100vh] right-0 opacity-40"
      ></img>
      <div className="bg-bg-pic bg-cover w-full h-full opacity-45"></div>
      <h3 className="absolute text-white text-8xl font-lato top-1/4 font-extrabold w-1/2">
        Giving <span className="bg-[#14A856] px-3 ">Food</span> a Second life
      </h3>
    </div>
  );
};

export default Home;
