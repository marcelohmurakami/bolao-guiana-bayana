import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import logo from "../../assets/logoDoBolao.jpeg";

import {
  HeaderWrapper,
  HeaderContainer,
  LogoArea,
  LogoIcon,
  LogoText,
  LogoTitle,
  LogoHighlight,
  Nav,
  NavList,
  NavLinkItem,
  UserArea,
  UserName,
  Avatar,
  StatusDot,
  HamburgerButton,
  MobileMenu,
  MobileOverlay,
  MobileUserArea,
  MobileNavList,
  LogoutButton,
} from "./HeaderStyled";

import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/useAuth";

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { data: profile } = useProfile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout() {
    await signOut();
    navigate("/login");
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <LogoArea>
          <Link to="/" onClick={closeMenu}>
            <LogoIcon src={logo} />
          </Link>

          <Link to="/" onClick={closeMenu}>
            <LogoText>
              <LogoTitle>
                Bolão da <LogoHighlight>GUYANA BAIANA</LogoHighlight>
              </LogoTitle>
            </LogoText>
          </Link>
        </LogoArea>

        <Nav>
          <NavList>
            <Link to="/meuspalpites">
              <NavLinkItem>Meus Palpites</NavLinkItem>
            </Link>
            <Link to="/ranking">
              <NavLinkItem>Ranking</NavLinkItem>
            </Link>
            <Link to="/resultados">
              <NavLinkItem>Resultados</NavLinkItem>
            </Link>
          </NavList>
        </Nav>

        <UserArea>
          <UserName>
            {profile?.nome} <StatusDot />
            <header>
              <button onClick={handleLogout}>Sair</button>
            </header>
          </UserName>

          <Avatar>
            <img src={profile?.avatar} alt="Avatar do usuário" />
          </Avatar>
        </UserArea>

        <HamburgerButton onClick={toggleMenu} aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </HamburgerButton>
      </HeaderContainer>

      {isMenuOpen && <MobileOverlay onClick={closeMenu} />}

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileUserArea>
          <Avatar>
            <img src={profile?.avatar} alt="Avatar do usuário" />
          </Avatar>

          <div>
            <strong>{profile?.nome}</strong>
          </div>
        </MobileUserArea>

        <MobileNavList>
          <Link to="/meuspalpites" onClick={closeMenu}>
            <NavLinkItem>Meus Palpites</NavLinkItem>
          </Link>
          <Link to="/ranking" onClick={closeMenu}>
            <NavLinkItem>Ranking</NavLinkItem>
          </Link>
          <Link to="/resultados" onClick={closeMenu}>
            <NavLinkItem>Resultados</NavLinkItem>
          </Link>
        </MobileNavList>

        <LogoutButton
          onClick={() => {
            closeMenu();
            handleLogout();
          }}
        >
          Sair
        </LogoutButton>
      </MobileMenu>
    </HeaderWrapper>
  );
}
