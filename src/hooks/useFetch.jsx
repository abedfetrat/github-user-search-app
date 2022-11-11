import { useState, useEffect } from "react";

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    setError(null);
    setLoading(true);
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error(response.status.toString());
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        setError(error.message);
      });
  }, [endpoint]);

  return [data, loading, error];
}

export default useFetch;
