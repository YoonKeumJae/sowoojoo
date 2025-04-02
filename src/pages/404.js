import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../styles/global";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #2980b9;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Image
          src="https://via.placeholder.com/300x300.png?text=404+Not+Found"
          alt="귀여운 404 이미지"
        />
        <Title>페이지를 찾을 수 없어요!</Title>
        <Subtitle>앗! 잘못된 경로로 오신 것 같아요.</Subtitle>
        <HomeButton to="/">홈으로 돌아가기</HomeButton>
      </Container>
    </>
  );
};

export default NotFoundPage;
