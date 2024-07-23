import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "../../../utils/index";

const Comment = ({ data, skeleton }) => {
  return (
    <>
      {skeleton ? (
        <Skeleton className="h-32" />
      ) : (
        <div
          className={cn(
            "bg-transparent",
            "border border:white hover:border-red-400",
            "p-3",
            "rounded-lg",
            "group",
            "transition duration-500"
          )}
        >
          <p className="text-white text-lg">{data.review}</p>
          <p
            className={cn(
              "text-gray-300 group-hover:text-red-400",
              "font-semibold",
              "mt-3",
              "transition duration-500"
            )}
          >
            {data.name}
          </p>
          <p className="text-gray-400 -mt-1">{data.date}</p>
        </div>
      )}
    </>
  );
};

export default Comment;
