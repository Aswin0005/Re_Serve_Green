import { useState } from 'react';

const NavBar = () => {
  const [NavBarColor, setNavBarColor] = useState(false);

  let vpHeight = window.innerHeight;

  console.log(vpHeight)

  const colorChange = () => {
    if (window.scrollY >= vpHeight-80) {
      setNavBarColor(true);
    }else{
      setNavBarColor(false);
    }
  };

  window.addEventListener('scroll', colorChange);
  console.log(NavBarColor)

  return (
    <div
      className={`fixed w-[95%] h-20 top-10 left-[50%] rounded-md -translate-x-1/2  z-20 ${
        NavBarColor ? 'bg-[#14A856]' : 'bg-white'
      }`}
    >
      <div className="flex justify-between mx-3">
        <div className="flex justify-center items-center">
          <img src="Img/Logo.svg" className="w-[70px] h-20"></img>
          <p
            className={`font-moonDance text-2xl font-black ${
        NavBarColor ? 'text-white' : 'text-black'
      }`}
          >
            Re-Serve
          </p>
        </div>
        <div className="flex gap-12 items-center">
          <button className="font-lato italic font-semibold ">Home</button>
          <button className="font-lato italic font-semibold">Services</button>
          <button className="font-lato italic font-semibold">About</button>
          <button
            className={`font-lato italic font-semibold bg-[#14A856] rounded-xl h-10 px-4 ${
              NavBarColor ? 'bg-white text-black' : 'bg-[#14A856]'
            }`}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
