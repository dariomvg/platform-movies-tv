import { Content } from "@/types/types";
import { full_image } from "@/utils/options";
import iconStar from "@/assets/star.svg";
import iconLink from "@/assets/link.svg";
import Link from "next/link";
import { convertDate } from "@/utils/convertDate";
import "@/styles/main.css";

export const ContainerMain = ({ movie }: { movie: Content }) => {
  const {
    backdrop_path,
    title,
    id,
    original_title,
    vote_average,
    release_date,
    overview,
  } = movie;

  return (
    <section className="section-header-main">
      <img
        src={`${full_image}${backdrop_path}`}
        alt={title}
        width="100%"
        height="100%"
        className="image-main"
        loading="lazy"
      />
      <div className="container-main">
        <div className="box-container-main">
          <div className="box-title-link">
            <Link
              href={`/content?id=${id}&media=movie`}
              className="title-container-main">
              {original_title}
            </Link>
            <img
              src={iconLink.src}
              alt="icon link"
              width={25}
              height={25}
              className="icon-link"
              loading="lazy"
            />
          </div>

          <p className="average-container-main">
            {" "}
            {Math.round(vote_average * 10) / 10}
            <img
              src={iconStar.src}
              alt="icon star"
              width={20}
              height={20}
              loading="lazy"
            />
          </p>
        </div>
        <p className="date-container-main">
          Lanzamiento: {convertDate(release_date)}
        </p>
        <p className="overview-container-main">{overview}</p>
      </div>
    </section>
  );
};
