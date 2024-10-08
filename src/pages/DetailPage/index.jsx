import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import apiService from "../../services/api.service";
import RestaurantDetail from "../../components/fragments/RestaurantDetail";
import { SkeletonTheme } from "react-loading-skeleton";
import { useCallback, useContext, useEffect, useState } from "react";
import BackTopButton from "../../components/elements/BackTopButton";
import { ActiveSidebar } from "../../context/ActiveSidebar";
import AlertDialog from "../../components/elements/AlertDialog";

const DetailPage = () => {
  const { setActiveSidebar } = useContext(ActiveSidebar);
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useCallback(() => apiService.get(id), [id]);
  const { data, isLoading, error, refetch } = useFetch(api);
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  useEffect(() => {
    setActiveSidebar("");
  });

  useEffect(() => {
    if (commentsUpdated) {
      refetch();
      setCommentsUpdated(false);
    }
  }, [commentsUpdated, refetch]);

  const handleCommentAdded = () => {
    setCommentsUpdated(true);
  };

  return (
    <main className="p-3 mb-20 sm:ml-20 sm:mb-0">
      {isLoading ? (
        <SkeletonTheme baseColor="#0f172a" highlightColor="#475569">
          <RestaurantDetail skeleton={isLoading} />
        </SkeletonTheme>
      ) : error ? (
        <AlertDialog text={error} />
      ) : data ? (
        <RestaurantDetail data={data} onCommentAdded={handleCommentAdded} />
      ) : (
        navigate("/")
      )}
      <BackTopButton />
    </main>
  );
};

export default DetailPage;
