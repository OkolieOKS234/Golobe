import React from "react";
import London from "../../assets/Trip_Images/London.png";
import Baku from "../../assets/Trip_Images/Baku.png";
import Maldives from "../../assets/Trip_Images/Maldives.png";
import NewYork from "../../assets/Trip_Images/NewYork.png";
import Istanbul from "../../assets/Trip_Images/Istanbul.png";
import Paris from "../../assets/Trip_Images/Paris.png";
import Tokyo from "../../assets/Trip_Images/Tokyo.png";
import Dubai from "../../assets/Trip_Images/Dubai.png";
import Flights_and_Hotels from "./Flights_and_Hotels";

const Trip = () => {
  return (
    <>
    <section className="mt-48 mx-24">
      <div className="flex justify-between">
        <div className="my-4">
          <h3 className=" font-bold text-lg">Plan your perfect trip</h3>
          <p className=" font-light">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <div>
          <button className="mr-24 border px-3 border-black">
            See More Places
          </button>
        </div>
      </div>
      {/* Images of Places */}
      <div className="flex gap-12 flex-wrap">
        {/* 1st */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
          <div>
            <img src={London} alt="" />
          </div>
          <div>
            <p>London, UK</p>
            <p>Flights. Tours. Resorts</p>
          </div>
        </div>
        {/* Second */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
          <div>
            <img src={Baku} alt="" />
          </div>
          <div>
            <p>Baku, Azerbaijan</p>
            <p>Flights. Tours. Resorts</p>
          </div>
        </div>
        {/* Third */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
          <div>
            <img src={Dubai} alt="" />
          </div>
          <div>
            <p>Dubai, UAE</p>
            <p>Flights. Tours. Resorts</p>
          </div>
        </div>

        {/* Fourth */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
          <div>
            <img src={Maldives} alt="" />
          </div>
          <div>
            <p>Malé, Maldives</p>
            <p>Flights. Tours. Resorts</p>
          </div>
        </div>

        {/* Fifth */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
          <div>
            {" "}
            <img src={NewYork} alt="" />
          </div>
          <div>
            <p>New York, USA</p>
            <p>Flights. Tours. Resorts</p>
          </div>
        </div>
        {/* Sixth */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
            <div>
            <img src={Paris} alt="" />
            </div>
            <div>
                <p>Paris, France</p>
                <p>Flights. Tours. Resorts</p>
            </div>
         </div>
         {/* Seventh */}

        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
            <div>
            <img src={Tokyo} alt="" />
            </div>
            <div>
                <p>Tokyo, Japan</p>
                <p>Flights. Tours. Resorts</p>
            </div>
          
        </div>
        {/* Eighth */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
            <div>
            <img src={Istanbul} alt="" />
            </div>
            <div>
                <p>Istanbul, Turkey</p>
                <p>Flights. Tours. Resorts</p>
            </div>
        
        </div>
{/* 9th */}
        <div className="flex shadow-lg gap-4 p-3 rounded-lg">
            <div>
            <img src={Istanbul} alt="" />
            </div>
            <div>
                <p>Istanbul, Turkey</p>
                <p>Flights. Tours. Resorts</p>
            </div>
        
        </div>
      </div>
    </section>
    <Flights_and_Hotels/>
    </>
  );
};

export default Trip;
