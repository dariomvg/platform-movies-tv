import "@/styles/section-pagination.css";
import Link from "next/link";
import iconNext from "@/assets/icon-next.svg";
import iconBack from "@/assets/icon-back.svg";

export const SectionPagination = ({ page }: { page: number }) => {
  return (
    <div className="container-button-content">
      {page > 1 && (
        <Link href={`series/${page - 1}`} className="button-both-content">
          <img
            src={iconBack.src}
            alt="icon back"
            width={20}
            height={20}
            loading="lazy"
          />
          {page - 1}
        </Link>
      )}
      <p className="title-page">{page}</p>
      <Link href={`series/${page + 1}`} className="button-both-content">
        {page + 1}
        <img
          src={iconNext.src}
          alt="icon back"
          width={20}
          height={20}
          loading="lazy"
        />
      </Link>
    </div>
  );
};
