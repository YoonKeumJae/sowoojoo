import React, { useEffect, useRef } from "react";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
import styled from "styled-components";
const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== "undefined") {
      // naver 객체가 준비될 때까지 주기적으로 체크
      const checkInterval = setInterval(() => {
        if (window.naver && window.naver.maps) {
          clearInterval(checkInterval);

          const location = new window.naver.maps.LatLng(37.5665, 126.978);
          const mapOptions = {
            center: location,
            zoom: 17,
          };
          const map = new window.naver.maps.Map(mapRef.current, mapOptions);

          new window.naver.maps.Marker({
            map,
            position: location,
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <h1>오시는 길</h1>
        <div ref={mapRef} style={{ width: "500px", height: "500px" }} />
      </Layout>
    </>
  );
};

export default Map;
