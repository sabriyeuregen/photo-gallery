import "./FavoriteCard.scss";
const FavoriteCard = (props) => {
  return (
    <div className="favoritecard">
      <div className="favoritecard__img">{props.image}</div>
      <div className="favoritecard__box">
        <div className="favoritecard__box-title">{props.title}</div>
      </div>
    </div>
  );
};

export default FavoriteCard;
