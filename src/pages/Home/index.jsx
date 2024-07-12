import { useState } from "react";
import SearchInput from "../../components/elements/SearchInput";
import { cn } from "../../utils";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import sortUtils from "../../utils/sortRestaurant";
import RestaurantCard from "../../components/fragments/RestaurantCard";

const sortList = ["Rating", "City", "Name"];

const Home = () => {
  const { data, isLoading, error } = useFetch(apiService.get);
  const [sort, setSort] = useState("sortByRating");
  const [active, setActive] = useState("Rating");

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
    <main className="p-5 mb-24 sm:ml-24 sm:mb-0">
      <div
        className={cn(
          "flex",
          "gap-4",
          "items-center",
          "justify-center sm:justify-between",
          "pb-3",
          "sm:mt-3"
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
        <SearchInput className="hidden sm:block" />
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
      <div className="flex justify-end sm:hidden mt-5">
        <SearchInput className="md:hidden" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
        {data &&
          sortUtils[sort](data.restaurants).map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </main>
  );
};

export default Home;
