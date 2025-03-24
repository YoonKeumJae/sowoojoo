import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

const ListWrapper = styled.div`
  margin-top: 1rem;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  display: ${(props) => (props.styleType === "album" ? "grid" : "block")};
  grid-template-columns: ${(props) =>
    props.styleType === "album"
      ? "repeat(auto-fit, minmax(200px, 1fr))"
      : "none"};
  gap: ${(props) => (props.styleType === "album" ? "1rem" : "0")};
`;

const PostItem = styled.li`
  ${(props) =>
    props.styleType === "list"
      ? css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.5rem 0;
          padding: 0.5rem;
          border-bottom: 1px solid #ddd;
        `
      : props.styleType === "album"
      ? css`
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `
      : css`
          margin: 1rem 0;
          padding: 1rem;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: ${(props) => (props.styleType === "list" ? "1rem" : "1.2rem")};
  font-weight: bold;

  &:hover {
    color: rgb(242, 167, 59);
  }
`;

const PostDate = styled.span`
  font-size: ${(props) => (props.styleType === "list" ? "0.9rem" : "1rem")};
  color: #888;
  margin-top: ${(props) => (props.styleType === "album" ? "0.5rem" : "0")};
  display: ${(props) => (props.styleType === "album" ? "block" : "inline")};
`;

const ListLayout = ({ posts, styleType = "card" }) => {
  const validPosts = posts.filter(
    (post) => post && post.fields && post.fields.slug // null 값 및 slug 없는 항목 제거
  );

  return (
    <ListWrapper>
      <PostList styleType={styleType}>
        {validPosts.map((post) => (
          <PostItem key={post.fields.slug} styleType={styleType}>
            <PostLink to={post.fields.slug} styleType={styleType}>
              {post.frontmatter.title}
            </PostLink>
            <PostDate styleType={styleType}>{post.frontmatter.date}</PostDate>
          </PostItem>
        ))}
      </PostList>
    </ListWrapper>
  );
};

export default ListLayout;
