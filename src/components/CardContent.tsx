import { PropsCardContent } from "@/types/types";
import iconStar from "@/assets/star.svg";
import Link  from "next/link";
import { poster_image } from "@/utils/options";
import "@/styles/card-content.css";

export const CardContent = ({ content }: PropsCardContent) => {
  const {id, title, name, poster_path, vote_average, original_title, original_name} = content; 

  return (
    <li className="card-content">
      <Link
        href={`/content?id=${id}&media=${title ? "movie" : "tv"}`}
        className="link-card-content">
        <img
          src={`${poster_image}${poster_path}`}
          alt={title || name}
          width="100%"
          height={300}
          className="image-card-content"
          loading="lazy"
        />
      </Link>
      <div className="container-card-content">
        <p className="average-card-content">
          {Math.round(vote_average * 10) / 10}
          <img src={iconStar.src} alt="icon star" width={20} height={20} title="star" loading="lazy" />
        </p>
      </div>
      <p className="title-card-content">
        {original_title || original_name}
      </p>
    </li>
  );
};
