"use client";
import "@/styles/header.css";
import Link from "next/link";
import { FormSearch } from "./FormSearch";
import { useState } from "react";
import iconMenu from "@/assets/icon-menu.svg";
import iconHome from "@/assets/home.svg";
import iconMovies from "@/assets/movies.svg";
import iconSeries from "@/assets/series.svg";
import iconUpcoming from "@/assets/upcoming.svg";
import iconGenres from "@/assets/genres.svg";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <img
        src={iconMenu.src}
        alt="icon menu"
        width={40}
        height={40}
        className="icon-menu"
        onClick={() => setActive(!active)}
        loading="lazy"
      />

      <div className="container-menu">
        <FormSearch active={active} />

        <nav className="nav-menu">
          <div className="container-link">
            <img
              src={iconHome.src}
              alt="icon home"
              width={25}
              height={25}
              className="icon-nav-menu"
              loading="lazy"
            />
            <Link href="/" className="link-menu">
              Home
            </Link>
          </div>
          <div className="container-link">
            <img
              src={iconMovies.src}
              alt="icon movies"
              width={25}
              height={25}
              className="icon-nav-menu"
              loading="lazy"
            />
            <Link href="/movies?page=1" className="link-menu">
              Movies
            </Link>
          </div>

          <div className="container-link">
            {" "}
            <img
              src={iconSeries.src}
              alt="icon series"
              width={25}
              height={25}
              className="icon-nav-menu"
              loading="lazy"
            />
            <Link href="/series?page=1" className="link-menu">
              Series
            </Link>
          </div>

          <div className="container-link">
            <img
              src={iconUpcoming.src}
              alt="icon upcoming"
              width={25}
              height={25}
              className="icon-nav-menu"
              loading="lazy"
            />
            <Link href="/upcomings" className="link-menu">
              Upcomings
            </Link>
          </div>

          <div className="container-link">
            <img
              src={iconGenres.src}
              alt="icon genders"
              width={25}
              height={25}
              className="icon-nav-menu"
              loading="lazy"
            />
            <Link href="/genres" className="link-menu">
              Genres
            </Link>
          </div>
        </nav>
      </div>
      <footer className="footer-menu">
        <p className="title-footer">© MoviesSeriesTv 2025</p>
      </footer>
    </header>
  );
};
