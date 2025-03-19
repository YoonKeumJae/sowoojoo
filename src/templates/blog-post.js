import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

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
}

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
