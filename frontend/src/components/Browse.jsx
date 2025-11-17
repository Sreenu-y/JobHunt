import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="font-bold text-xl mt-10">
          Search Result {allJobs?.length}
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {allJobs.map((job) => (
            <Job job={job} key={job?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
