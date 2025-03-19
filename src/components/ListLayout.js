import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ListWrapper = styled.div`
  /* padding: 1rem; */
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin: 1.5rem 0;
  padding: 0 1rem;
  background-color: rgb(233, 233, 233);
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #663399;
  &:hover {
    text-decoration: underline;
  }
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const ListLayout = ({ posts }) => {
  return (
    <ListWrapper>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.fields.slug}>
            <PostLink to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </PostLink>
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostItem>
        ))}
      </PostList>
    </ListWrapper>
  );
};

export default ListLayout;
