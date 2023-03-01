import "./Home.scss";
import homeimage from "../../assets/homeimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <img className="home__img" src={homeimage} alt="home"></img>
      <h1>
        Favorite your photograph <FontAwesomeIcon icon={faHeart} />
      </h1>
    </div>
  );
};

export default Home;
