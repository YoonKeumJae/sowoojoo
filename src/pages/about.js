import React from "react";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <p>이 웹사이트는 활동과 소개를 위한 공간입니다.</p>
      </Layout>
    </>
  );
};

export default AboutPage;
