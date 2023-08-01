import React from "react";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-6 mt-6 mx-2">
      <h2 className="text-2xl font-semibold">Recent Posts:</h2>

      <section className="flex flex-col gap-y-4 my-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </main>
  );
};

export default Home;
