import { useState } from "react";
import axios from "axios";
const usePostData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const postData = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(url, data);
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
