import Lottie from "react-lottie-player";
import list from "../assets/lottie/list.json";

const Home = () => {
  return (
    <div className="text-center text-white">
      <Lottie
        speed={1.1}
        className="h-1/3 w-1/3 mx-auto mt-36"
        loop
        animationData={list}
        play
      />
      <p className="text-6xl">Welcome!</p>
      <p className="text-xl mt-8 underline">Let's start</p>
    </div>
  );
};

export default Home;
