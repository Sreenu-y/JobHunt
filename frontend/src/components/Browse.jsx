import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3, 5, 5, 5, 5];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="font-bold text-xl mt-10">
          Search Result {randomJobs.length}
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item, idx) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
