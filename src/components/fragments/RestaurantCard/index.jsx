import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantCard = ({ restaurant, skeleton }) => {
  return (
    <div className="bg-slate-950 rounded-lg md:rounded-xl p-1 sm:p-2 pb-5 border border-slate-800">
      {skeleton ? (
        <Skeleton className="h-28 sm:h-36 md:h-44" />
      ) : (
        <img
          className="rounded-sm md:rounded-md"
          src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
          alt="Restaurant Picture"
        />
      )}
      <div className="text-white mt-1 sm:mt-2 px-1 sm:px-0">
        <h5 className="font-bold text-base sm:text-lg line-clamp-1">
          {skeleton ? <Skeleton width={75} /> : restaurant.name}
        </h5>
        <p className="text-xs sm:text-sm text-gray-400 -mt-1 sm:mb-2">
          {skeleton ? <Skeleton width={50} /> : restaurant.city}
        </p>
        <p className="text-gray-500 line-clamp-1 sm:line-clamp-2 text-sm sm:text-base">
          {skeleton ? <Skeleton /> : restaurant.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
