import React, { useEffect, useState } from "react";
import { Video } from "../components/Video";
import { axiosInstance } from "../config";

export const Post = () => {
  const [movies, setMovies] = useState([]);
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axiosInstance.get("/watch/movie/" + path);
      setMovies(res.data);
    };
    fetchMovies();
  }, [path]);
  return (
    <main className="lg:flex ">
      <Video src={movies.urlMovie} />
      <div className="text-white  w-full bg-bgnetflix py-20 pl-2 pr-5">
        <p className="text-subtitle  text-wh mb-4 font-semibold flex justify-center">Tonton Juga!</p>
        <div className="rekomendasi md:flex md: justify-center md:gap-9 md:flex-wrap lg:ml-0 ml-5">
          <div className="border-t-[1px] border-gray-600">
            <div className="judul mt-2 flex items-center">
              <p className="border-[1px] py-1 px-3 rounded-md border-gray-200 mr-2">1</p>
              <p>Alfian Maulana</p>
            </div>
            <div className="poster my-4 flex flex-wrap items-center">
              <img src="../src/assets/thumb-1.png" alt="poster" className="w-36 mr-2 rounded-md " />
              <p>Genre : Action, Horror</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
// https://res.cloudinary.com/alfianmna/video/upload/v1699359550/Upin_Ipin_Dapur_Masak-Masak_Episode_Terbaru___Upin_Ipin_Terbaru_2023___Upin_Ipin_Musim_17_uiawpz.mp4
