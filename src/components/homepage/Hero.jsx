import React from "react";
import HeroImage from "../../assets/hero_travel.png";

const Hero = () => {
  return (
    <header className="header  rounded-xl h-[481px] w-[90%] shadow-lg m-auto my-5">
      <div className="nav px-3 flex py-7">
        <ul className=" nav flex gap-6 font-semibold">
          <li className="text-white px-3 py-1 hover:text-slate-100 cursor-pointer">Find Flight</li>
          <li className="text-white px-3 py-1 hover:text-slate-100 cursor-pointer">Find Stays</li>
          <li className="logo text-white text-3xl md:px-64 hover:text-slate-100 cursor-pointer">G<span className="text-green-600">O</span>L<span className="text-green-600">O</span>B<span className="text-green-500">O</span></li>
          <li className="text-white  px-3 py-1 hover:text-slate-100 cursor-pointer">Login</li>
          <li className="bg-white text-black px-3 py-1 rounded hover:bg-slate-400 cursor-pointer">SignUp</li>
        </ul>
      </div>
      <div className="text-center flex flex-col justify-center items-center py-24">
        <p className="text-white text-2xl">Helping Others</p>
        <h1 className="text-white font-bold text-6xl">Live & Travel</h1>
        <p className="text-white">Special offers to suit your plan</p>
      </div>
      {/* box search */}
      <div className="trip_search_box bg-white w-4/5 shadow-lg  m-auto h-[170px] relative top-2 px-3 py-3 ">
        <div className="flex gap-10">
          <p className="font-semibold border-r-2 h-5 px-3">Flights</p>
          <p className="font-semibold">Stays</p>
        </div>
        <div className=" flight_trip flex  gap-10 px-12 pt-2">
            {/* first Input */}
          <div className="" >
           
            <select name="Cities" id="" className="border border-black w-44">
              <option value="Lagos">Select a City</option>
              <option value="Lagos">Lagos-Kano</option>
              <option value="Lagos">Lagos-Abuja</option>
              <option value="Lagos">Accra-Lagos</option>
              <option value="Lagos">London-Abuja</option>
            </select>
          </div>
{/* second Input */}
          <div className="flight_trip">
          <select name="Trip_Type" id="" className="border border-black w-44">
              <option value="Return">Return</option>
              <option value="One-Way">One-Way</option>
            </select>
          </div>
          <div className="flight_trip">
            <input type="date" className=" border border-black" />
          </div>
          <div className="flight_trip">
            <select name="flight_class" id="" className="border w-44">
                <option value="">First Class</option>
                <option value="">Economy</option>
            </select>
          </div>
        </div>
         {/* Promo side */}
<div className="pt-10 flex gap-4 justify-end pr-14">
<p className="px-2 py-1 cursor-pointer"> <span className=" text-blue-900 font-extrabold text-xl">+</span>Add Promo Code</p>
<button className=" bg-green-400 px-3 py-1 cursor-pointer text-sm hover:bg-green-600">Book Flight</button>
</div>
      </div>
    </header>
  );
};

export default Hero;
