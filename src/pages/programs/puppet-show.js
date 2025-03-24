import React from "react";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const PuppetShowPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>인형극</h1>
        <p>이 페이지는 인형극 프로그램에 대한 내용을 담고 있습니다.</p>
      </Layout>
    </>
  );
};

export default PuppetShowPage;
