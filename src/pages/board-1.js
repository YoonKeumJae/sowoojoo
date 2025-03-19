import React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";

const Board1Page = ({ data }) => {
  const notices = data?.allMarkdownRemark?.nodes || [];

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>공지사항</h1>
        {notices.length > 0 ? (
          <ListLayout posts={notices} />
        ) : (
          <p>공지사항이 없습니다.</p>
        )}
      </Layout>
    </>
  );
};

export default Board1Page;

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
