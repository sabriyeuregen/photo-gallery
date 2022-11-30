import "./Home.scss";
import homeimage from "../../assets/homeimage.jpg";
import homeimgtwo from "../../assets/home-imgtwo.jpg";
const Home = () => {
  return (
    <div className="home">
      <img className="home__img" src={homeimage} alt="home"></img>
      <img className="home__img-two" src={homeimgtwo} alt="imgtwo"></img>
    </div>
  );
};

export default Home;
