import { WeddingCountdown } from "../components";
import invitations from "../lib/data.json";
import Notfound from "./404";

const Home = () => {
  const urlSearch = new URLSearchParams(window.location.search);
  const name = urlSearch.get("name");
  if (!name) return <Notfound />;

  if (!invitations.some((people) => people.name === name)) return <Notfound />;
  return (
    <div className="relative flex flex-col">
      <WeddingCountdown />
    </div>
  );
};

export default Home;
