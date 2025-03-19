import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-top: 1rem;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
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
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: rgb(242, 167, 59);
  }
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.5rem;
`;

const ListLayout = ({ posts }) => {
  return (
    <ListWrapper>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.fields.slug}>
            <PostLink to={post.fields.slug}>{post.frontmatter.title}</PostLink>
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostItem>
        ))}
      </PostList>
    </ListWrapper>
  );
};

export default ListLayout;
