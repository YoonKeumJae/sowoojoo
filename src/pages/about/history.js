import React from "react";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const HistoryPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>소개 역사</h1>
        <p>이 페이지는 소개 역사에 대한 내용을 담고 있습니다.</p>
      </Layout>
    </>
  );
};

export default HistoryPage;
