"use client"

import { CardContent } from "@/components/CardContent";
import { useMyList } from "@/hooks/useMyList";
import Link from "next/link";
import "./my-list.css"; 

export default async function MyList () {
    const { list, deleteContent } = useMyList();

    return (
        <section className="page-my-list">
      {list.length > 0 ? (
        <ul className="container-my-list">
          {list.map((item) => (
            <div key={item.id} className="card-my-list">
              <button className="button-my-list" title={`Remove: ${item.name || item.title}`} onClick={() => deleteContent(item.id)}>
                X
              </button>
              <CardContent content={item} />
            </div>
          ))}
        </ul>
      ) : (
        <section className="section-without-movies">
          <p>Without movies added</p>
          <Link href="/" className="link">Explore</Link>
        </section>
      )}
    </section>
    )
}