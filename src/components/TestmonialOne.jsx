import { useState } from "react";
import imageTanya from "../assets/images/image-tanya.jpg";
import imageJohn from "../assets/images/image-john.jpg";
import "../assets/css/TestmonialOne.css";
import SliderBtn from "./SliderBtn";

const testimonials = [
  {
    id: 1,
    name: "Tanya Sinclair",
    role: "UX Engineer",
    image: imageTanya,
    review:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  },
  {
    id: 2,
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    image: imageJohn,
    review:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
];

function TestmonialOne() {
  const [currentTestmonial, setCurrentTestmonial] = useState(0);
  const data = testimonials[currentTestmonial];

  const handleNext = () => {
    setCurrentTestmonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };
  const handlePrev = () => {
    setCurrentTestmonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <div
      className="testmonial-one   
    flex flex-col justify-center items-center xl:flex-row-reverse xl:items-start relative"
    >
      <header className="header lg:h-164.5 w-[88%] sm:w-[50%] md:w-[70%]  sm:max-w-100 md:max-w-137.5 lg:w-full lg:max-w-174 pb-5.75 pt-8 mt-5.5   relative  sm:pb-7 lg:pt-15.75 lg:mt-12.5 lg:mr-18.25">
        <div className="image-tanya w-[77%] lg:w-[85.3%] mx-auto lg:mr-23 lg:ml-16">
          <img src={data.image} alt={data.name} />
        </div>
        <SliderBtn onNext={handleNext} onPrev={handlePrev} />
      </header>
      <div className="text-content text-center  flex justify-center align-center flex-col   z-10 xl:items-start xl:justify-start ">
        <p className="review-text font-light text-center xl:text-left  text-[1.125rem] sm:text-[1.5rem] md:text-[2rem] xl:text-[32px]/[44px]  tracking-[0.01em] pt-14.5 xl:ml-55 xl:mt-60  xl:pl-0 max-w-79 sm:max-w-125 md:max-w-137.5  xl:max-w-159.25 xl:pt-0 xl:w-[90%]  ">
          {data.review}
        </p>
        <div className="job-info sm:flex sm:justify-center sm:items-center sm:flex-row sm:gap-x-1.5 relative xl:ml-55 xl:mt-6.25">
          <p className="test-writer font-bold text-[15px] text-blue-950 mt-4.25 sm:mt-0">
            {data.name}
          </p>
          <p className="job-title font-medium text-[15px] text-gray-400">
            {data.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestmonialOne;
