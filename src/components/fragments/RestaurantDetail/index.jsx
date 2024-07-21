import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CategoryLabel from "../../elements/CategoryLabel";
import Comment from "../../elements/Comment";
import CommentDialog from "../../elements/CommentDialog";

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
          <Skeleton width={100} className="h-5" />
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
            <Skeleton width={150} className="text-2xl" />
            <Skeleton width={75} className="px-5 py-1 mt-2" />
            <div className="mt-5">
              <Skeleton count={5} className="text-lg" />
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-white text-2xl font-bold">Categories</h3>
            <div className="flex mt-2 gap-3">
              {data.restaurant.categories.map((item, i) => (
                <CategoryLabel key={i} category={item.name} />
              ))}
            </div>
            <p className="text-white text-lg mt-5">
              {data.restaurant.description}
            </p>
          </div>
        )}
      </div>
      <div className="mt-5">
        <h3 className="text-white text-2xl font-bold">
          {skeleton ? <Skeleton width={150} /> : "Comments"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3 gap-2">
          {skeleton
            ? Array(3)
                .fill(0)
                .map((_, i) => <Comment key={i} skeleton={skeleton} />)
            : data.restaurant.customerReviews.map((comment, i) => (
                <Comment key={i} data={comment} />
              ))}
        </div>
        <CommentDialog />
      </div>
    </div>
  );
};

export default RestaurantDetail;
