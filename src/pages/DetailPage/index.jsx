import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import RestaurantDetail from "../../components/fragments/RestaurantDetail";
import { SkeletonTheme } from "react-loading-skeleton";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(() => apiService.get(id));

  return (
    <main className="p-3 mb-20 sm:ml-20 sm:mb-0">
      {isLoading ? (
        <SkeletonTheme baseColor="#0f172a" highlightColor="#475569">
          <RestaurantDetail skeleton={isLoading} />
        </SkeletonTheme>
      ) : error ? (
        <p className="text-center text-white text-3xl">Error...</p>
      ) : data ? (
        <RestaurantDetail data={data} />
      ) : (
        navigate("/")
      )}
    </main>
  );
};

export default DetailPage;
