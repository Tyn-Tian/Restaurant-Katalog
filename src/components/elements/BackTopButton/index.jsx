import { FaArrowUpLong } from "react-icons/fa6";
import { cn } from "../../../utils";
import { useEffect, useState } from "react";

const BackTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const [display, setDisplay] = useState("hidden");

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition > 150) {
      return setDisplay("fixed");
    } else if (scrollPosition < 150) {
      return setDisplay("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "px-3 pt-2 pb-1",
        "bg-red-400",
        "w-fit h-fit",
        "rounded-md",
        display,
        "right-3",
        "bottom-24 sm:bottom-10 md:bottom-7 lg:bottom-5",
        "z-40",
        "opacity-70"
      )}
    >
      <button onClick={handleClick}>
        <FaArrowUpLong className="text-white" />
      </button>
    </div>
  );
};

export default BackTopButton;
