<<<<<<< HEAD
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { gsap } from 'gsap';
import { SocialLinks } from '../SocialLinks';
import MenuLinks from './MenuLinks';
import { ResponsiveHeader } from '../ResponsiveHeader';

const Header = () => {
  const refHeader = useRef();
  const [sideMenu, setSideMenu] = useState(false);

  const toggleMenu = () => {
    if (!sideMenu) {
      gsap.to('.sideMenu', {
        duration: 0.3,
        opacity: 1,
        visibility: 'visible',
        ease: 'power2.inOut',
      });
      gsap.from('.sideMenu li', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: 'power2.out',
      });
    } else {
      gsap.to('.sideMenu', {
        duration: 0.5,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power2.inOut',
      });
    }
    setSideMenu(!sideMenu);
  };

  useLayoutEffect(() => {
    const header = document.getElementById('header');
    let fixedTop = refHeader.current.offsetTop;
    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add('stickyHeader');
      } else {
        header.classList.remove('stickyHeader');
      }
    };
    window.addEventListener('scroll', stickyHeader);
  }, []);

  return (
    <React.Fragment>
      <header className='hidden lg:block' ref={refHeader} id='header'>
        <div className='topbar fixed md:top-[1.875rem] lg:top-[4rem] xl:top-[5rem] top-[1.25rem] left-0 w-full z-[9999]'>
          <div className='container mx-auto sm:container md:container lg:container xl:container 2xl:container'>
            <div className='flex items-center justify-between w-full topbarInner'>
              {/* <div className='logo inline-block max-w-[50%]'> */}
                {/* <Link
                  to='/'
                  title='Utsav'
                  className='text-5xl text-white font-bold'
                >
                  UD */}
                {/* </Link> */}
                {/* Logo */}
              {/* </div> */}
              <div className='hidden menuWrapper'>
                <MenuLinks></MenuLinks>
              </div>
            </div>
            {/* Topbar Inner */}
          </div>
          {/* Topbar */}
        </div> 
        {/* Header */}
      </header>
      <ResponsiveHeader></ResponsiveHeader>
    </React.Fragment>
  );
};

export default Header;
=======
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { gsap } from "gsap";
import Logo from "../../assets/images/logo.png";
import { SocialLinks } from "../SocialLinks";
import MenuLinks from "./MenuLinks";
import { MenuData } from "./SideMenu/MenuData";
import SubMenu from "./SideMenu/SubMenu";
import { ResponsiveHeader } from "../ResponsiveHeader";

const Header = () => {
  const refHeader = useRef();
  const [sideMenu, setSideMenu] = useState(false);

  const toggleMenu = () => {
    if (!sideMenu) {
      gsap.to(".sideMenu", {
        duration: 0.3,
        opacity: 1,
        visibility: "visible",
        ease: "power2.inOut",
      });
      gsap.from(".sideMenu li", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power2.out",
      });
    } else {
      gsap.to(".sideMenu", {
        duration: 0.5,
        opacity: 0,
        visibility: "hidden",
        ease: "power2.inOut",
      });
    }
    setSideMenu(!sideMenu);
  };

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    let fixedTop = refHeader.current.offsetTop;
    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add("stickyHeader");
      } else {
        header.classList.remove("stickyHeader");
      }
    };
    window.addEventListener("scroll", stickyHeader);
  }, []);

  return (
    <React.Fragment>
      <header
        className="hidden lg:block"
        ref={refHeader}
        id="header"
      >
        <div className="topbar fixed md:top-[1.875rem] lg:top-[4rem] xl:top-[5rem] top-[1.25rem] left-0 w-full z-[9999]">
          <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
            <div className="flex items-center justify-between w-full topbarInner">
              <div className="logo inline-block max-w-[50%]">
                <Link
                  to="/"
                  title="Utsav"
                  className="text-5xl text-white font-bold"
                >
                  UD
                </Link>
                {/* Logo */}
              </div>
              <div className="hidden menuWrapper">
                <MenuLinks></MenuLinks>
              </div>
            </div>
            {/* Topbar Inner */}
          </div>
          {/* Topbar */}
        </div>
        <div className="menuWrap hidden lg:flex flex-col items-center justify-between fixed left-[3.4375rem] top-[5.625rem] bottom-[5.625rem] border-2 border-solid border-accent rounded-full z-[9999] w-[6.25rem] px-5 py-[3.125rem]">
          {!sideMenu && (
            <span className="mirror" onClick={toggleMenu}>
              <CgMenuRight
                className="text-white cursor-pointer hover:text-accent"
                size={32}
              ></CgMenuRight>
            </span>
          )}
          <div className="flex flex-col items-center justify-center gap-8 menuInner">
            <SocialLinks></SocialLinks>
            <span className="h-[2.5rem] sm:h-[3rem] md:h-[5.625rem] bg-accent w-[1px]"></span>
            <h5
              className="uppercase text-white font-Poppins font-bold text-[1rem]"
              style={{
                textOrientation: "mixed",
                writingMode: "vertical-rl",
                transform: "matrix(-1, 0, 0, -1, 0, 0)",
              }}
            >
              Follow Me
            </h5>
          </div>
          {/* Menu Wrap */}
        </div>
        <div
          className="sideMenu bg-[#000] fixed transition-all ease-in-out duration-300 z-[9999] top-0 h-screen w-screen flex justify-center items-center px-8 py-16 overflow-y-scroll"
          style={{
            opacity: sideMenu ? "1" : "0",
            visibility: sideMenu ? "visible" : "hidden",
          }}
        >
          <span className="mirror absolute right-10 top-4" onClick={toggleMenu}>
            <CgClose
              className="text-white cursor-pointer hover:text-accent"
              size={40}
            ></CgClose>
          </span>
          <ul className="flex flex-col text-4xl gap-10 w-120">
            <li>
              <Link
                to="/"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-accent"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Header */}
      </header>
      <ResponsiveHeader></ResponsiveHeader>
    </React.Fragment>
  );
};

export default Header;
>>>>>>> f057f81 (Updated Site)
