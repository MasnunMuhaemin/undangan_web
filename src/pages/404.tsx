import { FaHeart } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="flex items-center text-8xl font-bold gap-4">
        4<FaHeart className="text-danger" size={80}></FaHeart>4
      </p>
      <p className="text-xl font-semibold">Not Found</p>
    </div>
  );
};

export default NotFound;
