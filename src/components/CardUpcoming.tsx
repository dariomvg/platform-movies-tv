import Link from "next/link";
import { Content } from "@/types/types";
import { poster_image } from "@/utils/options";
import "@/styles/card-upcoming.css";

export const CardUpcoming = ({ content }: { content: Content }) => {
  const { id, title, poster_path } = content;
  return (
    <li className="card-aside">
      <Link href={`content?id=${id}&media=movie`}>
        <img
          src={`${poster_image}${poster_path}`}
          alt={title}
          width="100%"
          height={300}
          className="image-card-aside"
          title={title}
          loading="lazy"
        />
      </Link>
      <p className="title-card-aside">{title}</p>
    </li>
  );
};
