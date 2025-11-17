import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Noida"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Software Developer",
      "Software Engineer",
      "Devops",
    ],
  },
  {
    filterType: "Job Type",
    array: ["Full-Time", "Part-Time", "Remote"],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((item, idx) => {
          return (
            <div key={`filter-${idx}`}>
              <h1 className="font-bold text-lg">{item.filterType}</h1>
              {item.array.map((option, index) => {
                return (
                  <div
                    key={`${item.filterType}-${index}`}
                    className="flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem
                      id={`${item.filterType}-${index}`}
                      value={option}
                    />
                    <Label htmlFor={`${item.filterType}-${index}`}>
                      {option}
                    </Label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
