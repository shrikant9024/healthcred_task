import React from "react";

const Banner = ({ heading, uhid, month, repayDate }) => {
  return (
    <>
      <div className="bg-slate-100 rounded-3xl m-2 text-black p-6 h-auto flex flex-col md:flex-row items-center justify-around gap-4 md:gap-6 font-inter">
        <div className="flex-1 text-center md:text-center">
          <h1 className="text-3xl md:text-4xl ml-24 lg:text-5xl font-semibold">
            {heading}
          </h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 bg-slate-300 p-4 md:p-6 rounded-xl items-center md:items-start">
          <h1 className="text-xs md:text-sm bg-slate-700 w-full md:w-auto p-2 rounded-lg text-center font-lg text-slate-100 md:text-center">
            UHID: <span>{uhid}</span>
          </h1>

          <h1 className="text-slate-600 font-medium text-sm md:text-base">
            Repayment Tenure: {month}
          </h1>
          <h1 className="text-slate-900 font-medium text-sm md:text-base">
            Upcoming Repayment Date : {repayDate}
          </h1>
        </div>
      </div>
      <hr className="bg-black" />
    </>
  );
};

export default Banner;
