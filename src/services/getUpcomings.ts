import { options, url_api } from "../utils/options";

export const getMoviesUpcoming = async () => {
  const res = await fetch(`${url_api}/movie/upcoming`,options);
  if(!res.ok) throw new Error("Failed to fetch movies upcoming")
  const data = await res.json();
  return data.results;
}