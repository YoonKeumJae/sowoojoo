import * as React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";
import styled from "styled-components";

const HeroSection = styled.section`
  text-align: center;
  margin: 2rem 0;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: rgb(242, 167, 59);
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const LinksSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;

const LinkCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  width: 200px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: rgb(242, 167, 59);
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
      color: #333;
    }
  }
`;

const NoticeSection = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || []; // 최근 공지사항 데이터

  console.log("Fetched posts:", posts); // posts 데이터 확인용 로그

  return (
    <>
      <GlobalStyle />
      <Layout>
        <NoticeSection>
          <SectionTitle>최근 공지사항</SectionTitle>
          {posts.length > 0 ? (
            <ListLayout styleType="list" posts={posts.slice(0, 5)} compact={true} /> // 간단한 리스트 스타일 사용
          ) : (
            <p>공지사항이 없습니다.</p>
          )}
        </NoticeSection>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notice/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
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

export const Head = () => <title>Home Page</title>;
