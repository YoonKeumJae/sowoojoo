import React from "react";
import { graphql } from "gatsby"; // graphql을 명시적으로 가져옴
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";

const Board1Page = ({ data }) => {
  const notices = data?.allMarkdownRemark?.nodes || []; // 데이터가 없을 경우 빈 배열 사용

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>공지사항</h1>
        {notices.length > 0 ? (
          <ListLayout posts={notices} />
        ) : (
          <p>공지사항이 없습니다.</p> // 데이터가 없을 경우 메시지 표시
        )}
      </Layout>
    </>
  );
};

export default Board1Page;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "notice" } } }
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
