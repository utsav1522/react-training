import { useEffect, useState } from "react";
import axios from "axios";
const withFetch = (Component) => {
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status !== 200) {
          setError(response.status);
          throw response;
        } else {
          console.log(response.data);
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    return <Component {...props} data={data} error={error} />;
  };
  return WithFetch;
};
export default withFetch;
