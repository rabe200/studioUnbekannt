import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
    top: 100%;
    left: 0;
    width: 100%;
    background: #111;
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

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
