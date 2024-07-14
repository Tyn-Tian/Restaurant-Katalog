import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LazyImage from "../../elements/LazyImage";

const RestaurantCard = ({ restaurant, skeleton }) => {
  return (
    <div className="bg-slate-950 rounded-lg md:rounded-xl p-2 pb-3 border border-slate-800">
      {skeleton ? (
        <Skeleton className="h-28 sm:h-36 md:h-44" />
      ) : (
        <LazyImage
          className="rounded-sm md:rounded-md"
          src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}
          alt="Restaurant Picture"
        />
      )}
      <div className="text-white mt-1 sm:mt-2 px-1 sm:px-0">
        <h5 className="font-bold text-lg line-clamp-1">
          {skeleton ? <Skeleton width={75} /> : restaurant.name}
        </h5>
        <p className="text-sm text-gray-400 -mt-1 sm:mb-2">
          {skeleton ? <Skeleton width={50} /> : restaurant.city}
        </p>
        <p className="text-gray-500 line-clamp-2 text-base">
          {skeleton ? <Skeleton /> : restaurant.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
