import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Comment = ({ data, skeleton }) => {
  return (
    <div className="bg-transparent border border-white hover:border-red-400 p-3 rounded-lg group transition duration-500">
      <p className="text-white text-lg">
        {skeleton ? <Skeleton count={2} /> : data.review}
      </p>
      <p className="text-gray-300 mt-3 font-semibold group-hover:text-red-400 transition duration-500">
        {skeleton ? <Skeleton width={60} /> : data.name}
      </p>
      <p className="text-gray-400 -mt-1">
        {skeleton ? <Skeleton width={100} /> : data.date}
      </p>
    </div>
  );
};

export default Comment;
