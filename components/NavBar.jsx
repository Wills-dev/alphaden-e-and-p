"use client";

import Link from "next/link";
import Image from "next/image";
import "./NavBar.css";
import { useState } from "react";
import { useActivePath } from "@hooks/useActivePath";
import useFixedNavbar from "@hooks/useFixedNavBar";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(true);
  const isFixed = useFixedNavbar(
    typeof window !== "undefined" ? window.innerHeight * 0.06 : 0
  );

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Service",
      link: "/services",
    },
    {
      name: "Project",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className={isFixed ? "header fixedPosition" : "header"}>
      <div className={isFixed ? "deactivate-upper-nav" : "upper-nav-bar "}>
        <div className="container">
          <div className="upper-nav-ctn">
            <ul className="nav-bar-social-ctn">
              <li className="social-media-list">
                <Link className="social-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/facebook.svg"
                    width={20}
                    height={12}
                    alt="Alphaden facebook"
                  />
                </Link>
              </li>
              <li className="social-media-list">
                <Link className="social-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/twitter.svg"
                    width={20}
                    height={12}
                    alt="Alphaden twitter"
                  />
                </Link>
              </li>
              <li className="social-media-list">
                <Link className="social-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/instagram.svg"
                    width={20}
                    height={12}
                    alt="alphaden intagram"
                  />
                </Link>
              </li>
              <li className="social-media-list">
                <Link className="social-media-link" href="twitter.com/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={12}
                    alt="alphaden linkedin"
                  />
                </Link>
              </li>
            </ul>
            <ul className="nav-contact-ctn">
              <li>+(234) 0909-933-3222</li>
              <li> info@alphadengas.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="down-nav-bar">
        <div className="container">
          <div className="down-nav-ctn">
            <div className="logo-ctn">
              <Link href="/">
                <Image
                  src="/assets/images/alphadengas-removebg-preview.png"
                  alt="Alphaden group"
                  height={50}
                  width={50}
                />
              </Link>
            </div>
            <div className="down-nav-page">
              {navLinks.map(({ name, link }) => {
                const isActive = useActivePath(link);
                return (
                  <Link
                    key={name}
                    href={link}
                    className={isActive ? "active nav-link" : "nav-link"}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>

            <div className="nav-bar-menu-icon">
              {openNav && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#83c21d"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={(e) => setOpenNav(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div
          className={openNav ? "side-bar-ctn" : "side-bar-ctn activate-sidebar"}
        >
          <div className="side-bar-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={(e) => setOpenNav(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="side-bar-wrapper">
            {navLinks.map(({ name, link }) => {
              const isActive = useActivePath(link);
              return (
                <Link
                  key={name}
                  href={link}
                  className={isActive ? "active nav-link" : "nav-link"}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
