import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const MenuLinks = () => {
  return (
    <nav className="relative hidden  lg:block">
      <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
      <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            UD
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            Services
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            Experience
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            Projects
          </ScrollLink>
        </li>
        <li className="menuItemHasChildren relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLinks;
