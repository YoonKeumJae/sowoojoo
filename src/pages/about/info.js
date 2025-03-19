import React from "react";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const InfoPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>소개 정보</h1>
        <p>이 페이지는 소개 정보에 대한 내용을 담고 있습니다.</p>
      </Layout>
    </>
  );
};

export default InfoPage;
