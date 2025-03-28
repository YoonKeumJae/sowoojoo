import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const HistoryContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  h2 {
    margin-top: 2rem;
    font-size: 1.8rem;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #34495e;

    &::before {
      content: "•";
      color: #3498db;
      font-weight: bold;
      display: inline-block;
      width: 1rem;
      margin-left: -1rem;
    }
  }
`;

const HistoryPage = ({ data }) => {
  const post = data?.allMarkdownRemark?.nodes[0]; // 첫 번째 게시글 가져오기

  if (!post) {
    // 데이터가 없을 경우 메시지 표시
    return (
      <>
        <GlobalStyle />
        <Layout>
          <p>게시글이 없습니다.</p>
        </Layout>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>연혁</h1>
        <HistoryContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export default HistoryPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/history/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
      nodes {
        html
      }
    }
  }
`;
