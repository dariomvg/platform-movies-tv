"use client";
import { FormEvent, memo, useRef } from "react";
import iconSearch from "@/assets/icon-search.svg";
import "@/styles/form-search.css";
import { useRouter } from "next/navigation";

export const FormSearch = ({ active }: { active: boolean }) => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current?.value) return;
    router.push(`/search/${ref.current.value}`);
    ref.current.value = "";
  };

  return (
    <form
      className={`form ${active ? "active-form" : ""}`}
      onSubmit={handleSubmit}>
      <input
        className="input-search"
        placeholder="Search movies, series..."
        ref={ref}
      />
      <button className="button-search" type="submit">
        <img
          src={iconSearch.src}
          alt="icon search"
          width={25}
          height={25}
          className="icon-search"
          loading="lazy"
        />
      </button>
    </form>
  );
};
