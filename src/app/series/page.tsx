import { CardContent } from "@/components/CardContent";
import { Content, PropsSearchParamsPage } from "@/types/types";
import { getSeries } from "@/services/getSeries";
import "@/styles/page-movies-series.css";
import { SectionPagination } from "@/components/SectionPagination";

export default async function Series({ searchParams }: PropsSearchParamsPage) {
  const { page } = await searchParams;
  const content = await getSeries(parseInt(page));

  return (
    <section className="page-both-content">
      {content && content.length > 0 && (
        <>
          <h1 className="title-both-content">List series</h1>
          <ul className="container-both-content">
            {content?.map((item: Content) => (
              <CardContent key={item.id} content={item} />
            ))}
          </ul>
          <SectionPagination page={parseInt(page)} media="series" />
        </>
      )}
    </section>
  );
}
