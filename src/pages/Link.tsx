import invitations from "../lib/data.json";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 text-white bg-slate-500 w-full p-5">
      {invitations.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/invite?name=${item.name}`}
            className="flex justify-center items-center shadow-lg rounded-lg backdrop-blur-sm bg-white/30 border py-2 px-3 text-sm sm:text-base"
          >
            Invite To {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
