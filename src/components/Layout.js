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
  padding: 0 400px;
  overflow-y: auto;
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

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
  
  a {
    color: black;
    border-radius: 4px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const Layout = ({ children }) => {
  const siteTitle = "SWJ"; // 고정된 사이트 이름

  return (
    <LayoutWrapper>
      <Header>
        <Title to="/">{siteTitle}</Title> {/* 고정된 사이트 이름 사용 */}
        <Nav>
          <Dropdown>
            <NavLink to="/about/info">소개</NavLink>
            <DropdownContent>
              <Link to="/about/info">정보</Link>
              <Link to="/about/history">역사</Link>
            </DropdownContent>
          </Dropdown>
          <NavLink to="/notice">공지사항</NavLink>
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
