import "@/styles/section-pagination.css";
import Link from "next/link";
import iconNext from "@/assets/icon-next.svg";
import iconBack from "@/assets/icon-back.svg";

export const SectionPagination = ({ page, media }: { page: number, media: string }) => {
  return (
    <div className="container-button-content">
      {page > 1 && (
        <Link href={`${media}?page=${page - 1}`} className="link-both-content">
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
      <Link href={`${media}?page=${page + 1}`} className="link-both-content">
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
