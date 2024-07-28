import { useContext, useEffect, useState } from "react";
import { cn } from "../../utils";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import sortUtils from "../../utils/sortRestaurant";
import RestaurantCard from "../../components/fragments/RestaurantCard";
import { SkeletonTheme } from "react-loading-skeleton";
import BackTopButton from "../../components/elements/BackTopButton";
import { ActiveSidebar } from "../../context/ActiveSidebar";

const sortList = ["Rating", "City", "Name"];

const HomePage = () => {
  const { data, isLoading, error } = useFetch(apiService.getAll);
  const [sort, setSort] = useState("sortByRating");
  const [active, setActive] = useState("Rating");
  const { setActiveSidebar } = useContext(ActiveSidebar);

  useEffect(() => {
    setActiveSidebar("home");
  });

  const sortListHandle = (name) => {
    if (name === "Rating") {
      setSort("sortByRating");
    } else if (name === "City") {
      setSort("sortByCity");
    } else {
      setSort("sortByName");
    }
    setActive(name);
  };

  return (
    <main className="p-3 mb-20 sm:ml-20 sm:mb-0">
      <div
        className={cn(
          "flex",
          "gap-4",
          "items-center",
          "justify-center sm:justify-between",
          "pb-3",
          "mt-3"
        )}
      >
        <img
          className="w-8 aspect-auto sm:hidden"
          src="/Logo.svg"
          alt="Restaurant Logo"
        />
        <h1 className="text-white font-semibold text-2xl sm:text-3xl">
          Catalog Restaurant
        </h1>
      </div>
      <ul
        className={cn(
          "flex",
          "justify-evenly sm:justify-start",
          "sm:gap-8",
          "border-b border-slate-800",
          "mt-3",
          "text-white font-semibold"
        )}
      >
        {sortList.map((item) => (
          <li
            key={item}
            className={`pb-2 hover:text-red-400 border-b cursor-pointer ${
              active === item ? "border-red-400 text-red-400" : "border-none"
            }`}
            onClick={() => sortListHandle(item)}
          >
            {item}
          </li>
        ))}
      </ul>
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
          sortUtils[sort](data.restaurants).map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))
        )}
      </div>
      <BackTopButton />
    </main>
  );
};

export default HomePage;
