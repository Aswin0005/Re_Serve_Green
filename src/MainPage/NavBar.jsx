const NavBar = () => {
 return (
   <div className="fixed w-[95%] h-20 top-10 left-[50%] rounded-md -translate-x-1/2 bg-white z-10">
     <div className="flex justify-between mx-3">
       <div className="flex justify-center items-center">
         <img src="/Img/Logo.svg" className="w-[70px] h-20"></img>
         <p className="font-moonDance text-2xl font-black">Re-Serve</p>
       </div>
       <div className="flex gap-12 items-center">
         <button className="font-lato italic font-semibold ">Home</button>
         <button className="font-lato italic font-semibold">Services</button>
         <button className="font-lato italic font-semibold">About</button>
         <button className="font-lato italic font-semibold text-white bg-[#14A856] rounded-xl h-10 px-4">
           Order
         </button>
       </div>
     </div>
   </div>
 );
}

export default NavBar