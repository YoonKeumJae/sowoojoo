import React, { useState } from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Dropdown = styled.select`
  background-color: rgb(242, 167, 59);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgb(200, 140, 50);
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  background-color: ${(props) =>
    props.active ? "rgb(242, 167, 59)" : "white"};
  color: ${(props) => (props.active ? "white" : "rgb(242, 167, 59)")};
  border: 1px solid rgb(242, 167, 59);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(242, 167, 59);
    color: white;
  }
`;

const NoticePage = ({ data }) => {
  const [sortOrder, setSortOrder] = useState("desc"); // 기본 정렬: 날짜 역순
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const notices = [...data.allMarkdownRemark.nodes]; // 데이터 복사

  const itemsPerPage = 10; // 한 페이지에 표시할 게시글 수
  const totalPages = Math.ceil(notices.length / itemsPerPage); // 총 페이지 수

  // 정렬 로직
  const sortedNotices = notices.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 현재 페이지에 해당하는 게시글 가져오기
  const paginatedNotices = sortedNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 변경 시 스크롤 맨 위로 이동
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 스크롤
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <HeaderWrapper>
          <h1>공지사항</h1>
          <Dropdown
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">최신순</option>
            <option value="asc">오래된순</option>
          </Dropdown>
        </HeaderWrapper>
        {paginatedNotices.length > 0 ? (
          <ListLayout posts={paginatedNotices} />
        ) : (
          <p>공지사항이 없습니다.</p>
        )}
        <PaginationWrapper>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </PaginationWrapper>
      </Layout>
    </>
  );
};

export default NoticePage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notice/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug
        }
      }
    }
  }
`;
