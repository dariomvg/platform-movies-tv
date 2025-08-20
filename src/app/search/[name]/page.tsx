import { searchMovie } from "@/services/searchMovie";
import "./search.css";
import { CardContent } from "@/components/CardContent";
import { Content, PagePropsSearch } from "@/types/types";

export default async function Search({ params }: PagePropsSearch) {

  const content = await searchMovie(params.name);

  return (
    <section className="page-search">
      {content && content.length > 0 && (
        <ul className="container-content-search">
          {content.map((item: Content) => (
            <CardContent key={item.id} content={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
