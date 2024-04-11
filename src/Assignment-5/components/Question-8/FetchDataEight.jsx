import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// const COUNTRIES = gql`
//   query MyQuery {
//     countries {
//       totalCount
//       edges {
//         node {
//           callingCode
//           capital
//           code
//           currencyCodes
//           flagImageUri
//           name
//           numRegions
//         }
//       }
//     }
//   }
// `;

// const options = {
//   method: "POST",
//   url: "https://geodb-cities-graphql.p.rapidapi.com/",
//   headers: {
//     "x-rapidapi-key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
//     "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
//     "Content-Type": "application/json",
//   },
//   data: {
//     query:
//       "query MyQuery {\n  countries {\n    totalCount\n    edges {\n      node {\n        callingCode\n        capital\n        code\n        currencyCodes\n        flagImageUri\n        name\n        numRegions\n      }\n    }\n  }\n}",
//   },
// };

const FetchDataEight = () => {
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading);
  // console.log(error);
  console.log(data);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response);
  //     if (response.status !== 200) {
  //       throw response;
  //     } else {
  //       setData(response.data);
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //     console.log(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // if (loading) return <h1>Loading....</h1>;

  return (
    <>
      {/* <ul>
        {data?.data?.countries?.edges?.map((ele) => {
          return (
            <li>
              <ul>
                <p>
                  --------------------------------------------------------------------------
                </p>
                <li>Calling Code: {ele?.node?.name}</li>
                <li>Calling Code: {ele?.node?.capital}</li>
                <li>Calling Code: {ele?.node?.code}</li>
                <li>Calling Code: {ele?.node?.callingCode}</li>
              </ul>
              <p>
                --------------------------------------------------------------------------
              </p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default FetchDataEight;
