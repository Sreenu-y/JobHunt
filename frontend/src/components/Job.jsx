import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 border border-gray-100  bg-white shadow-xl rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : daysAgoFunction(job?.createdAt)}{" "}
          days ago
        </p>
        <Button
          variant="outline"
          className="rounded-full cursor-pointer"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://tse2.mm.bing.net/th/id/OIP.I0HgIIGDG_usTSrQ1rlhagHaHP?pid=Api&P=0&h=180" />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">{job?.location}</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge className="text-blue-700 font-bold " variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className="text-[#e57206] font-bold " variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#6a38c2] font-bold " variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" className="cursor-pointer">
          <Link to={`description/${job._id}`}>Details</Link>
        </Button>
        <Button className="bg-[#6a38c2] hover:bg-[#5a10d8] cursor-pointer">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
