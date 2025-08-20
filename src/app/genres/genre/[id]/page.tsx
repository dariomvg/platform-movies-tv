import { CardContent } from "@/components/CardContent";
import Link from "next/link";
import "./genre.css";
import { getContentGenres } from "@/services/getContentGenres";
import { Content, PropsParamsId } from "@/types/types";


export default async function Genre({ params }: PropsParamsId) {
 
  const {id} = await params
  const content = await getContentGenres(parseInt(id));

  return (
    <section className="page-genre">
      {content && content.length > 0 ? (
        <ul className="list-content-genres">
          {content.map((item: Content) => (
            <CardContent key={item.id} content={item} />
          ))}
        </ul>
      ) : (
        <section className="section-null">
          <p className="title-null">Not results</p>
          <Link href="/genres" className="link-null">
            Come back
          </Link>
        </section>
      )}
    </section>
  );
}
