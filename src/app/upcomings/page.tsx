import { getMoviesUpcoming } from "@/services/getUpcomings";
import "./upcoming.css";
import { CardContent } from "@/components/CardContent";
import { Content } from "@/types/types";

export default async function Upcomings() {
  const moviesUpcoming = await getMoviesUpcoming();
  return (
    <main className="page-upcomings">
      <h1 className="title-page-upcoming">List movies</h1>
      <ul className="container-page-upcoming">
        {moviesUpcoming.map((item: Content) => (
          <CardContent key={item.id} content={item} />
        ))}
      </ul>
    </main>
  );
}
