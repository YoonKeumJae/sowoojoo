import React from "react";
import GlobalStyle from "../../styles/global";
import Layout from "../../components/Layout";

const LecturePage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>강의</h1>
        <p>이 페이지는 강의 프로그램에 대한 내용을 담고 있습니다.</p>
      </Layout>
    </>
  );
};

export default LecturePage;
