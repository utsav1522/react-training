import { useContext } from "react";
import { LanguageContext } from "./Question-10";

const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);
  const langArr = ["English", "Spanish", "Italian", "German"];
  return (
    <>
      <form>
        <select
          onChange={(e) => {
            languageContext.setLanguage(e.target.value);
          }}
        >
          {langArr.map((ele) => {
            return (
              <option value={ele} key={new Date().toLocaleString}>
                {ele}
              </option>
            );
          })}
        </select>
      </form>
    </>
  );
};
export default LanguageSelector;
