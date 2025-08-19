import { CardContent } from "@/components/CardContent";
import "./actor.css";
import Link from "next/link";
import { Content } from "@/types/types";
import { getMoviesActor } from "@/services/getMoviesActor";

export default async function Actor({ params }: { params: { id: string } }) {
  if (!params.id) return;
  const content = await getMoviesActor(parseInt(params.id));

  return (
    <section className="page-actor">
      {content && content.length > 0 ? (
        <ul className="container-content-actor">
          {content.map((item: Content) => (
            <CardContent key={item.id} content={item} />
          ))}
        </ul>
      ) : (
        <section className="section-null">
          <p className="title-null">Not results</p>
          <Link href="/" className="link-null">
            Come back
          </Link>
        </section>
      )}
    </section>
  );
}
