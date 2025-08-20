import { CardContent } from "@/components/CardContent";
import "@/styles/page-movies-series.css";
import { Content, PropsSearchParamsPage } from "@/types/types";
import { getMovies } from "@/services/getMovies";
import { SectionPagination } from "@/components/SectionPagination";

export default async function Movies({ searchParams }: PropsSearchParamsPage) {
  const { page } = await searchParams;
  const content = await getMovies(parseInt(page));

  return (
    <section className="page-both-content">
      {content && content.length > 0 && (
        <>
          <h1 className="title-both-content">List movies</h1>
          <ul className="container-both-content">
            {content?.map((item: Content) => (
              <CardContent key={item.id} content={item} />
            ))}
          </ul>
          <SectionPagination page={parseInt(page)} media="movies" />
        </>
      )}
    </section>
  );
}
