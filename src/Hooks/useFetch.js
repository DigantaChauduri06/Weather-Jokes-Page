import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const fetching = async (url, controller) => {
    console.log(url);
    if (url !== null) {
      setPending(true);
      fetch(url, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          console.log("data " + data);
          setData(data);
          setError(null);
          setPending(false);
        })
        .catch((e) => {});
    }
    return () => {
      controller.abort();
    };
  };
  useEffect(() => {
    const controller = new AbortController();
    fetching(url, controller);
  }, [url]);
  return [data, error, pending];
}

// const fetching = async (url, controller) => {
//   try {
//     console.log(url);
//     if (url !== null) {
//       setPending(true);
//       const data = await fetch(url, { signal: controller.signal });
//       // console.log("url ", data);
//       if (!data.ok) throw new Error("Url is wrong! 404 not found");
//       const json = await data.json();
//       console.log("json " + json);
//       setData(json);
//       setError(null);
//       setPending(false);
//     }
//   } catch (e) {
//     setData(null);
//     setPending(false);
//     console.log("error : " + e);
//     setError("Error Happened");
//   }
//   return () => {
//     controller.abort();
//   };
// };
