import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

const Nav = styled.nav`
  background: #111;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

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

  return (
    <Nav>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/exhibitions">Exhibitions</NavLink>
        <NavLink href="/artists">Artists</NavLink>
        <NavLink href="/artworks">Artworks</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}
