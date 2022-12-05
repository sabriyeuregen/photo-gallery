import "./PhotoCard.scss";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";
const PhotoCard = (props) => {
  const ctx = useContext(FavoriteContext);

  return (
    <div className="photo">
      <div className="photo__image">{props.image}</div>
      <div
        onClick={() => ctx.addToFavorite(props.image, props.title)}
        className="photo__favorite-icon"
      >
        {props.icon}
      </div>
      <div className="photo__title-box">
        <div className="photo__title">{props.title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
