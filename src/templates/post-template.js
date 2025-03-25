import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global"; // 글로벌 스타일 추가

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  if (!post) {
    return (
      <>
        <GlobalStyle /> {/* 글로벌 스타일 적용 */}
        <Layout>
          <h1>게시글을 찾을 수 없습니다</h1>
        </Layout>
      </>
    );
  }

  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      html
    }
  }
`;

export default PostTemplate;
