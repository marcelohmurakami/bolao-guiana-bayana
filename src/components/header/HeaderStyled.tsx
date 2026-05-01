import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  z-index: 20;
  background: rgba(10, 14, 30, 0.95);
  backdrop-filter: blur(10px);
`;

export const HeaderContainer = styled.div`
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  a {
    text-decoration: none;
  }
`;

export const LogoIcon = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const LogoText = styled.div`
  @media (max-width: 768px) {
   
  }
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

export const LogoHighlight = styled.span`
  color: #32d96b;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
  }
`;

export const NavLinkItem = styled.li`
  list-style: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;

  button {
    background: transparent;
    border: 0;
    color: #ff6b6b;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #32d96b;
  display: inline-block;
`;

export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 999px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Caret = styled.span`
  color: white;
`;

export const HamburgerButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  display: none;
  border: 0;
  border-radius: 0.75rem;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.28rem;

  span {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 999px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 25;
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 1rem;
  width: min(20rem, calc(100% - 2rem));
  background: #11182b;
  border-radius: 1rem;
  padding: 1rem;
  z-index: 30;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);

  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: 0.25s;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileUserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  ${NavLinkItem} {
    width: 100%;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 0.75rem;
  padding: 0.9rem 1rem;
  background: #ff6b6b;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;