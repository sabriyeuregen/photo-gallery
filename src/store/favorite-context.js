import React from "react";
import { useState } from "react";

const FavoriteContext = React.createContext({
  image: "",
  title: "",
  addToFavorite: () => {},
});

export const FavoriteContextWrapper = (props) => {
  const [items, setItems] = useState([]);

  const addToFavorite = (image, title) => {
    setItems((prevState) => [...prevState, { image, title }]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        items,
        addToFavorite
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
