import arrowright from "../assets/images/icon-next.svg";
import arrowleft from "../assets/images/icon-prev.svg";
import "../index.css";
function SliderBtn({ onNext, onPrev }) {
  return (
    <div className="slider-btn absolute left-[50%] sm:left-[18%]  bottom-2 sm:bottom-[5%] bg-white  w-20 sm:w-28.5 h-10 sm:h-15 flex gap-8 sm:gap-10 px-4 sm:px-5.5 py-3.25 sm:py-5 rounded-full  -translate-x-1/2 sm:translate-0 shadow-md">
      <button
        onClick={onPrev}
        className="arrow-left w-2.25 h-3.5 sm:w-3.25 sm:h-4.75"
      >
        <img src={arrowleft} alt="previous" />
      </button>
      <button
        onClick={onNext}
        className="arrow-right w-2.25 h-3.5 sm:w-3.25 sm:h-4.75"
      >
        <img src={arrowright} alt="next" />
      </button>
    </div>
  );
}

export default SliderBtn;
