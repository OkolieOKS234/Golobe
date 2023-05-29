import React from "react";

const Flights_and_Hotels = () => {
  return (
    <section className="flex gap-4 py-4 px-12">
      <div className="first flex flex-col justify-end items-center w-[604px] h-[559px] rounded-xl text-center py-5 ">
        <div>
          <h3 className="font-bold text-5xl text-white py-3">Flights</h3>{" "}
        </div>
        <div>
          <p className="text-white w-96 py-2">Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <div>
          <button className="px-3 py-1 bg-green-400"> Search Flights</button>
        </div>
      </div>
      {/* Second */}
      <div className="second flex flex-col justify-end items-center w-[604px] h-[559px] rounded-xl text-center py-5 ">
      <div>
          <h3 className="font-bold text-5xl text-white py-3">Hotels</h3>{" "}
        </div>
        <div>
          <p className="text-white w-96 py-2">Search hotels & Places Hire to our most popular destinations</p>
        </div>
        <div>
          <button className="px-3 py-1 bg-green-400"> Search Flights</button>
        </div>
        </div>
    </section>
  );
};
// width: 604px;
// height: 559px;

export default Flights_and_Hotels;
