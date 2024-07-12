import { useEffect, useState } from "react";

const useFetch = (apiService) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService();
        setData(result);
        SetError(null);
      } catch (e) {
        SetError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [apiService]);
  return { data, isLoading, error };
};

export default useFetch;
