import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import { SkeletonTheme } from "react-loading-skeleton";
import RestaurantCard from "../../components/fragments/RestaurantCard";
import { loadDataFromStorage } from "../../utils/storage";
import BackTopButton from "../../components/elements/BackTopButton";

const FavoritePage = () => {
  const { data, isLoading, error } = useFetch(apiService.getAll);
  const favorite = loadDataFromStorage();

  return (
    <main className="p-3 mb-20 sm:ml-20 sm:mb-0">
      <div className="border-b border-slate-800 pb-3 sm:mt-3">
        <h1 className="text-white text-center sm:text-start font-semibold text-2xl sm:text-3xl">
          Your Favorite Restaurant
        </h1>
      </div>
      <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
        {isLoading ? (
          <SkeletonTheme baseColor="#0f172a" highlightColor="#475569">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <RestaurantCard skeleton={isLoading} key={i} />
              ))}
          </SkeletonTheme>
        ) : error ? (
          <p className="text-white font-bold text-3xl">{error}</p>
        ) : (
          data &&
          data.restaurants
            .filter((restaurant) => {
              for (const item of favorite) {
                if (restaurant.id === item.id) {
                  return restaurant;
                }
              }
            })
            .map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
        )}
      </div>
      <BackTopButton />
    </main>
  );
};

export default FavoritePage;
