import Link from "next/link";
import { full_image, poster_image, url_trailer } from "@/utils/options";
import { convertDate } from "@/utils/convertDate";
import iconStar from "@/assets/star.svg";
import ReactPlayer from "react-player";
import "./content.css";
import { getContentAndTrailer } from "@/services/getContentAndTrailer";
import { filterTrailer } from "@/services/filterTrailer";
import { Loader } from "@/components/Loader";

export default async function Content({
  searchParams,
}: {
  searchParams: { id: string; media: string };
}) {
  if (!searchParams.id || !searchParams.media) return;
  const content = await getContentAndTrailer(
    parseInt(searchParams.id),
    searchParams.media
  );

  const trailer = filterTrailer(content);

  return (
    <section className="page-content">
      {content && (
        <>
          <div className="background">
            <img
              src={`${full_image}${content.backdrop_path}`}
              alt={content.title}
              width="100%"
              height="100%"
              className="image-background"
              loading="lazy"
            />
          </div>

          <section className="section-show-content">
            <div className="container-content">
              <div className="container-poster-trailer">
                <img
                  src={`${poster_image}${content.poster_path}`}
                  alt={content.title || content.name}
                  width={200}
                  height={300}
                  className="poster-content"
                  loading="lazy"
                />
                {trailer[0]?.key && (
                  <div className="container-video">
                    <ReactPlayer
                      src={`${url_trailer}${trailer[0]?.key}`}
                      controls
                      width="100%"
                      height="100%"
                      config={{ youtube: { color: "red" } }}
                      fallback={<Loader />}
                    />
                  </div>
                )}
              </div>
              <h1 className="title-container-content">
                {content.original_title || content.original_name}
              </h1>
              <div className="cont-average-date">
                <p className="date-container-content">
                  Año de lanzamiento:{" "}
                  {convertDate(content.release_date || content.first_air_date)}
                </p>

                <p className="average-container-content">
                  {content.vote_average &&
                    Math.round(content.vote_average * 10) / 10}
                  <img src={iconStar} alt="icon star" width={20} height={20} />
                </p>
              </div>
              {content.number_of_episodes && content.number_of_seasons && (
                <div className="container-episodes">
                  <p>
                    <b>Number of seasons:</b> {content.number_of_seasons}
                  </p>
                  <p>
                    <b>Number of episodes:</b> {content.number_of_episodes}
                  </p>
                </div>
              )}

              {content.director?.name && (
                <p className="director-container-content">
                  <b>Director:</b> {content.director.name}
                </p>
              )}
              {content.homepage && (
                <a
                  href={content?.homepage}
                  className="homepage-container-content"
                  target="_blank"
                  rel="noreferrer">
                  Homepage
                </a>
              )}

              <div className="genres-container-content">
                <strong className="title-genres-container">Genres: </strong>
                {content.genres?.map(
                  ({ name, id }: { name: string; id: string }) => (
                    <p className="genre-container-content" key={id}>
                      {name}
                    </p>
                  )
                )}
              </div>
              <div className="actor-container-content">
                <strong className="title-genres-container">Actors: </strong>
                {content.cast?.map(
                  ({ name, id }: { name: string; id: string }) => (
                    <Link
                      href={`/actor/${id}?actor=${name}`}
                      className="link-actor"
                      key={id}>
                      {name}
                    </Link>
                  )
                )}
              </div>
              <p className="overview-container-content">{content.overview}</p>
            </div>
          </section>
        </>
      )}
    </section>
  );
}
