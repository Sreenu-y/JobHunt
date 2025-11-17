import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Science",
  "Graphic Designer",
  "Devops Engineer",
  "AWS Architect",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, idx) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3"
              key={`${cat} - ${idx}`}
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
