import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../services/axiosInstance";
function useGetData(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url);
        setResponseData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // Cleanup function (optional)
    return () => {
      // Cancel ongoing requests, if necessary
    };
  }, [url]);
  return { loading, error, responseData };
}
export default useGetData;
