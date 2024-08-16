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
              <div className='logo inline-block max-w-[50%]'>
                <Link
                  to='/'
                  title='Utsav'
                  className='text-5xl text-white font-bold'
                >
                  UD
                </Link>
                {/* Logo */}
              </div>
              <div className='hidden menuWrapper'>
                <MenuLinks></MenuLinks>
              </div>
            </div>
            {/* Topbar Inner */}
          </div>
          {/* Topbar */}
        </div>
        
          {/* Menu Wrap */}
        
        
        {/* Header */}
      </header>
      <ResponsiveHeader></ResponsiveHeader>
    </React.Fragment>
  );
};

export default Header;
>>>>>>> f057f81 (Updated Site)
