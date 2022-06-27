import { useState } from "react";
import logo from "../assets/logo.svg";
import Carousel from "../components/Carousel";
import "../styles/App.scss";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Carousel />
  );
}

export default Home;