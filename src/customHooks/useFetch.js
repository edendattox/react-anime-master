import { useEffect, useState } from "react";

const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    let isMounted = true;

    setLoading(true);

    fetch(url, {
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(error.message);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
      // abortController.abort();
    };
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;
