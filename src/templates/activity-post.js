import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/global"; // 글로벌 스타일 추가
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

const ActivityPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  if (!post) {
    return (
      <Layout>
        <h1>게시글을 찾을 수 없습니다</h1>
      </Layout>
    );
  }

  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <Layout>
        <TitleWrapper>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </TitleWrapper>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <ImagesWrapper>
          {data.allFile.nodes.map((image) => (
            <img key={image.id} src={image.publicURL} alt={image.name} />
          ))}
        </ImagesWrapper>
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

export default ActivityPostTemplate;
