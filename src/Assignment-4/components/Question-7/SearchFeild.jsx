import { useEffect, useState } from "react";

/**Design a search filter component that consists of an input field.
 * As the user types into the input, use controlled components to
 * filter a list of items displayed below.
 * The list should dynamically update to show only items matching the search query.
 */
const SearchFeild = () => {
  const itemsList = [
    "Potato",
    "Tomato",
    "Apple",
    "Orange",
    "Grapes",
    "Watermelon",
    "Melon",
    "Elon Musk",
    "Mark Zukerberg",
    "Steve Jobs",
    "Larry Page",
    "Narayan Murthi",
  ];

  const [searchInput, setSearchInput] = useState("");
  const [searchRes, setSearchRes] = useState(itemsList);

  useEffect(() => {
    const newList = itemsList.filter((ele) => {
      let newEle = ele.toLowerCase();
      return newEle.includes(searchInput.toLowerCase());
    });
    setSearchRes(newList);
  }, [searchInput]);

  return (
    <>
      <h1>Question 7 - Search Feild</h1>
      <input
        placeholder="Search ...."
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      <ul>
        {searchRes.map((ele, index) => {
          return <li key={index + 45098}>{ele}</li>;
        })}
      </ul>
    </>
  );
};
export default SearchFeild;
