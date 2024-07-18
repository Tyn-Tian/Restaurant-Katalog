import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantDetail = ({ data, skeleton }) => {
  return (
    <div>
      <div>
        <h1 className="text-white font-bold text-2xl">
          {skeleton ? <Skeleton width={150} /> : data.restaurant.name}
        </h1>
        <p className="text-gray-400 -mt-1">
          {skeleton ? <Skeleton width={75} /> : data.restaurant.city}
        </p>
        {skeleton ? (
          <Skeleton width={100} />
        ) : (
          <Rating
            className="max-w-28"
            value={data.restaurant.rating}
            readOnly
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 mt-5">
        {skeleton ? (
          <div className="w-full lg:w-96">
            <Skeleton className="inline-block h-40 xs:h-52 sm:h-72 md:h-96 lg:h-52 aspect-auto" />
          </div>
        ) : (
          <img
            loading="lazy"
            src={`https://restaurant-api.dicoding.dev/images/large/${data.restaurant.pictureId}`}
            alt="Restaurant Picture"
            className="rounded-lg w-full lg:w-96 aspect-auto"
          />
        )}
        {skeleton ? (
          <div className="w-full">
            <Skeleton count={5} className="text-lg" />
          </div>
        ) : (
          <p className="text-white text-lg">{data.restaurant.description}</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
