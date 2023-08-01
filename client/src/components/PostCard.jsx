import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Link to="/post">
      <div className="border shadow-lg md:h-60 w-full rounded-xl flex gap-x-4 flex-col sm:flex-row cursor-pointer">
        <div className="h-60 px-4 pt-4  lg:w-[35%] md:h-full flex justify-center items-center md:p-4">
          <img
            src="https://wallpaperset.com/w/full/3/3/2/238845.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="p-4 px-6 sm:px-4  w-full sm:w-[60%] mt-2">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl line-clamp-1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className="flex gap-2 font-semibold text-xl py-3">
            <span>author</span>
            <span>time</span>
          </div>
          <p className="text-xl mt-2 sm:mt-2 line-clamp-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            deleniti, quos laboriosam cumque qui eum labore fuga unde deserunt
            nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            iste fuga in!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
