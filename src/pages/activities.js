import React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";

const ActivitiesPage = ({ data }) => {
  const activities = data?.allMarkdownRemark?.nodes || []; // 데이터가 없을 경우 빈 배열 사용

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>활동내역</h1>
        {activities.length > 0 ? (
          <ListLayout posts={activities} styleType="album" /> // 앨범형 리스트 스타일 사용
        ) : (
          <p>활동내역이 없습니다.</p>
        )}
      </Layout>
    </>
  );
};

export default ActivitiesPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/activities/" } }
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
