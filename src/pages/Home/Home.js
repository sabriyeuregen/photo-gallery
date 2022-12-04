import "./Home.scss";
import homeimage from "../../assets/homeimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <img className="home__img" src={homeimage} alt="home"></img>
      {/*<img className="home__img-two" src={homeimgtwo} alt="imgtwo"></img>*/}
      <h1>Favorite your images <FontAwesomeIcon icon={faHeart} /></h1>
    </div>
  );
};

export default Home;
