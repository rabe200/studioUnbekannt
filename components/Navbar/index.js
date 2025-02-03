import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background: #111;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ffcc00;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/exhibitions">Exhibitions</NavLink>
      <NavLink href="/artists">Artists</NavLink>
      <NavLink href="/artworks">Artworks</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Nav>
  );
}
