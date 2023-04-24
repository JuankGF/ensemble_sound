import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = { className?: string; linkClassName?: string };

export default function Navbar({ className, linkClassName }: NavbarProps) {
  let location = useLocation();
  const isActive = (route: string) => {
    return location.pathname === route;
  };

  return (
    <ul className={`px-0 list-unstyled ${className ?? "nav-menu"}`}>
      <li>
        <Link
          className={`app-link ${linkClassName ?? ""} ${
            isActive("/") ? "active" : ""
          }`}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        {location.pathname === "/" ? (
          <a className={`app-link ${linkClassName ?? ""}`} href="#about">
            About
          </a>
        ) : (
          <Link
            className={`app-link ${linkClassName ?? ""} ${
              isActive("/#about") ? "active" : ""
            }`}
            to="/#about"
          >
            About
          </Link>
        )}
      </li>
      <li>
        <Link
          className={`app-link ${linkClassName ?? ""} ${
            isActive("/book_online/services") ? "active" : ""
          }`}
          to={"/book_online/services"}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className={`app-link ${linkClassName ?? ""} ${
            isActive("/book_online") ? "active" : ""
          }`}
          to={"/book_online"}
        >
          Book Online
        </Link>
      </li>
      <li>
        <Link
          className={`app-link ${linkClassName ?? ""} ${
            isActive("/login") ? "active" : ""
          }`}
          to={"/login"}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}
