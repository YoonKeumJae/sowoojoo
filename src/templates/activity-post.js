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

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default function ActivityPost({ data }) {
  const post = data?.markdownRemark; // 데이터가 없을 경우 null 처리
  const images = data?.allFile?.nodes || []; // 이미지 데이터가 없을 경우 빈 배열 사용

  if (!post) {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <TitleWrapper>
            <Title>게시글을 찾을 수 없습니다.</Title>
          </TitleWrapper>
        </Layout>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <TitleWrapper>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </TitleWrapper>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <ImagesWrapper>
          {images.map((image) => (
            <img key={image.id} src={image.publicURL} alt={image.name} />
          ))}
        </ImagesWrapper>
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "activities" }
        extension: { regex: "/(jpg|jpeg|png|gif)/" }
        relativeDirectory: { eq: $slug } # 폴더 이름만 비교
      }
    ) {
      nodes {
        id
        publicURL
        name
      }
    }
  }
`;
