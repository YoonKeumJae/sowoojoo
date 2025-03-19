import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  background-color: #663399;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #232129;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const Main = styled.main`
  height: 100%;
`;
const Title = styled(Link)`
  font-size: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Layout = ({ children }) => {
  const siteTitle = "SWJ"; // 고정된 사이트 이름

  return (
    <LayoutWrapper>
      <Header>
        <Title to="/">{siteTitle}</Title> {/* 고정된 사이트 이름 사용 */}
        <Nav>
          <NavLink to="/about">소개</NavLink>
          <NavLink to="/notice">공지사항</NavLink> {/* 이름 변경 */}
          <NavLink to="/board-2">활동 게시판 2</NavLink>
          <NavLink to="/board-3">활동 게시판 3</NavLink>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© 2025 All rights reserved.</p>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
