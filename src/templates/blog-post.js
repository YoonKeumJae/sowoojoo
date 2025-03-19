import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global";
import styled from "styled-components";

const TitleWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;
const Date = styled.p`
  font-size: 1.5rem;
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <TitleWrapper>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </TitleWrapper>
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
