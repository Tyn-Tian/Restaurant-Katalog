import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(() => apiService.get(id));

  return (
    <main className="p-3 mb-24 sm:ml-24 sm:mb-0">
      {isLoading ? (
        <p className="text-center text-white text-3xl">Loading...</p>
      ) : error ? (
        <p className="text-center text-white text-3xl">Error...</p>
      ) : data ? (
        <div className="flex flex-col">
          <div>
            <h1 className="text-white font-bold text-2xl">
              {data.restaurant.name}
            </h1>
            <p className="text-gray-400 -mt-1">{data.restaurant.city}</p>
            <Rating
              className="max-w-28"
              value={data.restaurant.rating}
              readOnly
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 mt-5">
            <img
              src={`https://restaurant-api.dicoding.dev/images/large/${data.restaurant.pictureId}`}
              alt="Restaurant Picture"
              className="rounded-lg w-full lg:w-96 aspect-auto"
            />
            <p className="text-white text-lg">{data.restaurant.description}</p>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </main>
  );
};

export default RestaurantDetail;
