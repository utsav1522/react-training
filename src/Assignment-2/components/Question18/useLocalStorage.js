function useLocalStorage() {
  const localStorage = window.localStorage;
  const setItems = (key, value) => {
    localStorage.setItem(key.toString(), value.toString());
    console.log("Value Added to Local Storage:");
  };
  const getItems = (key) => {
    if (localStorage.getItem(key)) return localStorage.getItem(key);
    else console.log("Error");
  };
  const deleteKey = (key) => {
    localStorage.removeItem(key);
    console.log("key deleted: ");
  };
  const deleteAll = () => [localStorage.clear()];
  return { setItems, getItems, deleteKey, deleteAll };
}

export default useLocalStorage;
