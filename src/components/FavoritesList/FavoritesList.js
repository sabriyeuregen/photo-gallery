import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";
import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.scss";
const FavoritesList = () => {
  const { items } = useContext(FavoriteContext);

  const itemsList = items.map((item) => (
    <FavoriteCard image={item.image} title={item.title} />
  ));

  return (
    <div className="itemslist">
      {items.length > 0 ? (
        itemsList
      ) : (
        <div className="warning">Let's add favorite the photos!</div>
      )}
    </div>
  );
};

export default FavoritesList;
