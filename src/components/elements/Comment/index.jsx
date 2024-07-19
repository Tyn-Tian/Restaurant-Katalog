import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Comment = ({ data, skeleton }) => {
  return (
    <div className="bg-gradient-to-r sm:bg-gradient-to-t from-slate-950 to-slate-900 border border-slate-800 p-3 rounded-lg">
      <p className="text-white text-lg">
        {skeleton ? <Skeleton count={2} /> : data.review}
      </p>
      <p className="text-gray-300 mt-3 font-semibold">
        {skeleton ? <Skeleton width={60} /> : data.name}
      </p>
      <p className="text-gray-400 -mt-1">
        {skeleton ? <Skeleton width={100} /> : data.date}
      </p>
    </div>
  );
};

export default Comment;
