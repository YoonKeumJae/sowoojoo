import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import sowoojooLogo from "../images/sowoojooLogo.png";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto; /* 콘텐츠 높이에 따라 동적으로 설정 */
`;

const Header = styled.header`
  color: black;
  padding: 1rem;
  text-align: center;
  height: 200px;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  background-color: rgb(150, 150, 150);
  color: white;
  padding: 1rem;
  text-align: center;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  flex: 1; /* 남은 공간을 차지 */
  padding: 0 400px;
  min-height: calc(
    100vh - 300px - 2rem
  ); /* 100vh에서 Header(200px)와 Footer(100px)의 높이를 뺌 */
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
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

  color: rgb(242, 167, 59);
  &:hover {
    color: white;
    background-color: rgb(242, 167, 59);
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block; /* 호버 시 드롭다운 메뉴 표시 */
  }
`;

const DropdownContent = styled.div`
  display: none; /* 기본적으로 숨김 */
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
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/content/footer/" }) {
        html
      }
    }
  `);

  const footerContent =
    data?.markdownRemark?.html || "<p>Footer 내용이 없습니다.</p>"; // 데이터가 없을 경우 기본 메시지 표시

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
              <Link to="/about/history">연혁</Link>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <NavLink to="/programs/lecture">교육 프로그램</NavLink>
            <DropdownContent>
              <Link to="/programs/lecture">강의</Link>
              <Link to="/programs/experience">체험</Link>
              <Link to="/programs/puppet-show">인형극</Link>
            </DropdownContent>
          </Dropdown>
          <NavLink to="/activities">활동내역</NavLink>
          <NavLink to="/notice">공지사항</NavLink>
          <NavLink to="/map">오시는 길</NavLink> {/* 경로 수정 */}
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
