import { useEffect, useState } from "react";
import {
  WeddingCountdown,
  Modal,
  Header,
  SubHeader,
  Content,
  Maps,
  Inputs,
  Gallery,
  Banks,
} from "../components";
import invitations from "../lib/data.json";
import Notfound from "./404";
import { FaPause, FaPlay } from "react-icons/fa6";

const Home = () => {
  const urlSearch = new URLSearchParams(window.location.search);
  const name = urlSearch.get("name");
  const [audio] = useState(new Audio("audio/audio.mp3"));
  const [toogle, setToogle] = useState(true);

  const handleToogle = () => {
    setToogle(!toogle);
    if (!toogle) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    audio.loop = true;
    if (!toogle) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [toogle, audio]);

  if (!name) return <Notfound />;

  if (!invitations.some((people) => people.name === name)) return <Notfound />;
  return (
    <div className="overflow-x-hidden">
      <Header />
      <SubHeader />
      <Content />
      <WeddingCountdown />
      <Maps />
      <Inputs name={name} />
      <Gallery />
      <Banks  />
      <div
        className="fixed top-5 right-5 p-2 cursor-pointer rounded-lg"
        onClick={handleToogle}
      >
        {toogle ? (
          <FaPause size={30} color="#BCC2BF" />
        ) : (
          <FaPlay size={30} color="#BCC2BF" />
        )}
      </div>
      <Modal audio={audio} />
    </div>
  );
};

export default Home;
