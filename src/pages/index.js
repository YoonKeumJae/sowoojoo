import * as React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || []; // 데이터가 없을 경우 빈 배열 사용

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>홈페이지</h1>
        {posts.length > 0 ? (
          <ListLayout posts={posts} />
        ) : (
          <p>게시물이 없습니다.</p> // 데이터가 없을 경우 메시지 표시
        )}
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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

export const Head = () => <title>Home Page</title>;
