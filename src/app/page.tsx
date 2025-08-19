import "@/styles/page.css";
import { getMovies } from "@/services/getMovies";
import { getMoviesUpcoming } from "@/services/getUpcomings";
import { getSeries } from "@/services/getSeries";
import { ContainerMain } from "../components/ContainerMain";
import { ContainerUpcoming } from "../components/ContainerUpcoming";
import { CardContent } from "@/components/CardContent";
import { CardUpcoming } from "@/components/CardUpcoming";
import { Content } from "@/types/types";
import "../styles/home.css";

export default async function Home() {
  const [movies, series, moviesUpcoming] = await Promise.all([
    getMovies(1),
    getSeries(1),
    getMoviesUpcoming(),
  ]);

  return (
    <main className="page-main">
      <ContainerMain movie={movies[0]} />
      <section className="section-movies">
        <div className="container-movies">
          <h2 className="title-container">Last movies</h2>
          <ul className="list-content">
            {movies.map((movie: Content) => (
              <CardContent key={movie.id} content={movie} />
            ))}
          </ul>
          <ContainerUpcoming content={moviesUpcoming[0]} />
          <h2 className="title-container">Last series</h2>
          <ul className="list-content">
            {series.map((serie: Content) => (
              <CardContent key={serie.id} content={serie} />
            ))}
          </ul>
        </div>
        <aside className="aside-upcomings">
          <h2 className="title-container">Upcomings</h2>
          <ul className="list-content-upcomings">
            {movies.slice(0, 13).map((movie: Content) => (
              <CardUpcoming content={movie} key={movie.id} />
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
