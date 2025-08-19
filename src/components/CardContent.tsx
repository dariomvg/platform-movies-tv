"use client"
import { PropsCardContent } from "@/types/types";
import iconSave from "@/assets/save.svg";
import iconStar from "@/assets/star.svg";
import Link  from "next/link";
import { poster_image } from "@/utils/options";
import { useMyList } from "@/hooks/useMyList";
import "@/styles/card-content.css";
import { memo } from "react";

export const CardContent = memo(({ content }: PropsCardContent) => {
  const { addContent } = useMyList();
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
        <button
          className="button-save-card"
          onClick={() => addContent(content)}>
          <img
            src={iconSave.src}
            alt="icon save"
            title="Save in list"
            width={25}
            height={25}
            className="icon-save-card"
            loading="lazy"
          />
        </button>
      </div>
      <p className="title-card-content">
        {original_title || original_name}
      </p>
    </li>
  );
});
