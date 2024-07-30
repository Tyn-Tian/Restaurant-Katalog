import { Link } from "react-router-dom";
import { cn } from "../../../utils";

const AlertDialog = ({ text }) => {
  return (
    <div className="absolute w-full flex sm:justify-center">
      <div
        className={cn(
          "border border-white hover:border-red-400",
          "w-full sm:w-96",
          "p-4",
          "rounded-md",
          "text-center",
          "group",
          "transition duration-500"
        )}
      >
        <h3
          className={cn(
            "text-white text-lg font-medium group-hover:text-red-400",
            "transition-all duration-500"
          )}
        >
          {text}
        </h3>
        <Link
          className={cn(
            "text-red-400 font-bold group-hover:text-white",
            "transition-all duration-500"
          )}
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AlertDialog;
