import { options, url_api } from "@/utils/options";

export const getMovies = async (page: number) => {
  const res = await fetch(`${url_api}/discover/movie?page=${page}`, options);
  if(!res.ok) throw new Error("Failed to fetch movies")
  const data = await res.json();
  return data.results;
};
