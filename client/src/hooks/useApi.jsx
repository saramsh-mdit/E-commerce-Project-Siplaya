import React from "react";

const useApi = (apiFuntion) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState();

  const apiCall = async () => {
    try {
      const response = await apiFuntion();
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  React.useEffect(() => {
    if (isLoading && !data) {
      apiCall();
    }
  }, []);
  return { isLoading, isError, data };
};

export default useApi;
