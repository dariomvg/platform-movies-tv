import Link from "next/link";
import "./genres.css";
import { getGenres } from "@/services/getGenres";

export default async function Genres() {
  const allGenres = await getGenres();
  if (!allGenres) return;
  const genres = Array.from(new Map(allGenres.map((e) => [e.id, e])).values());

  return (
    <section className="page-genres">
      {genres.map((genre) => (
        <Link
          href={`/genres/genre/${genre.id}?genre=${genre.name}`}
          key={genre.id}
          className="genre">
          {genre.name}
        </Link>
      ))}
    </section>
  );
}
