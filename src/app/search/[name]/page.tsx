import { searchMovie } from "@/services/searchMovie";
import "./search.css";
import { CardContent } from "@/components/CardContent";
import { Content } from "@/types/types";

interface PageSearchPropsParams {
  params: Promise<{ name: string }>;
}

export default async function Search({ params }: PageSearchPropsParams) {
  const { name } = await params;
  const content = await searchMovie(name);

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
