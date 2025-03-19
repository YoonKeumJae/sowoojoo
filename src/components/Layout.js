import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import sowoojooLogo from "../images/sowoojooLogo.png";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  /* background-color: rgb(242,167,59); */
  color: black;
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

const Img = styled.img`
  width: 200px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(242, 167, 59);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid gray;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    color: white;
    background-color: rgb(242, 167, 59);
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
  min-width: 120px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  top: 100%; /* 네비게이션 바 아래에 표시 */
  left: 0;

  a {
    display: block;
    padding: 10px 16px;
    color: rgb(242, 167, 59);
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;

    &:hover {
      background-color: rgb(242, 167, 59);
      color: white;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Title to="/">
          <Img src={sowoojooLogo} alt="소우주" />
        </Title>
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
