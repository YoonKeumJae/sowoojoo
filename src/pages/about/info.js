import React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const InfoPage = ({ data }) => {
  const post = data?.allMarkdownRemark?.nodes[0]; // 첫 번째 게시글 가져오기

  if (!post) {
    // 데이터가 없을 경우 메시지 표시
    return (
      <>
        <GlobalStyle />
        <Layout>
          <h1>소개 정보</h1>
          <p>게시글이 없습니다.</p>
        </Layout>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export default InfoPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/info/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        html
      }
    }
  }
`;
