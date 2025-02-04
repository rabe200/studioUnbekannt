import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

const Nav = styled.nav`
  background: red;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  width: 100%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #111;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false); // Close menu when navigating to a new page
  }, [router.pathname]);

  const handleNavClick = (href) => {
    if (router.pathname === href) {
      router.replace(href); // Force reload the same page
    }
    setIsOpen(false); // Close the menu on any link click
  };

  return (
    <Nav>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink
          onClick={() => handleNavClick("/about")}
          as={Link}
          href="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/exhibitions")}
          as={Link}
          href="/exhibitions"
        >
          Exhibitions
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/artists")}
          as={Link}
          href="/artists"
        >
          Artists
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/artworks")}
          as={Link}
          href="/artworks"
        >
          Artworks
        </NavLink>
        <NavLink
          onClick={() => handleNavClick("/contact")}
          as={Link}
          href="/contact"
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
}
