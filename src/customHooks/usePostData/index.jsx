import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/helper";
const usePostData = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const postData = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, data);
      setResponseData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return { loading, error, responseData, postData };
};
export default usePostData;
