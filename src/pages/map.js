// import React, { useEffect, useRef } from "react";
// import { NaverMap } from "react-naver-maps";
// import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";
// // import styled from "styled-components";
// const Map = () => {
//   // const mapRef = useRef(null);

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     const checkInterval = setInterval(() => {
//   //       if (window.naver && window.naver.maps) {
//   //         clearInterval(checkInterval);

//   //         const location = new window.naver.maps.LatLng(37.5665, 126.978);
//   //         const mapOptions = {
//   //           center: location,
//   //           zoom: 17,
//   //         };
//   //         const map = new window.naver.maps.Map(mapRef.current, mapOptions);

//   //         new window.naver.maps.Marker({
//   //           map,
//   //           position: location,
//   //         });
//   //       }
//   //     }, 100);
//   //   }
//   // }, []);

//   // return (
//   //   <>
//   //     <GlobalStyle />
//   //     <Layout>
//   //       <h1>오시는 길</h1>
//   //       <div ref={mapRef} style={{ width: "500px", height: "500px" }} />
//   //     </Layout>
//   //   </>
//   // );
//   const mapElement = useRef(null); // 지도가 렌더링될 div 요소를 참조
//   const mapRef = useRef(null); // 네이버 지도 객체 참조

//   useEffect(() => {
//     if (!mapElement.current) return;

//     // 네이버 지도 API 스크립트를 동적으로 추가
//     const script = document.createElement("script");
//     script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=iyfdv60svn`;
//     script.async = true;

//     // 스크립트 로드 후 실행될 콜백
//     script.onload = () => {
//       // 지도 기본 옵션 설정
//       const mapOptions = {
//         center: new naver.maps.LatLng(37.5365, 126.978), // 초기 중심 좌표
//         zoom: 12, // 초기 확대 수준
//       };

//       // 네이버 지도 객체 생성 및 초기화
//       mapRef.current = new naver.maps.Map(mapElement.current, mapOptions);

//       // 각 지역에 마커 추가 (regions 데이터 기반)
//       regions.forEach((region) => {
//         const markerOptions = {
//           position: new naver.maps.LatLng(region.lat, region.lng), // 마커의 위치
//           map: mapRef.current, // 마커를 표시할 지도 객체
//           title: region.value, // 마커의 타이틀 (지역 이름)
//         };

//         // 마커 생성
//         new naver.maps.Marker(markerOptions);
//       });
//     };

//     // 스크립트 로드 실패 시 에러 처리
//     script.onerror = () => {
//       console.error("Failed to load Naver Maps script");
//     };

//     // 동적으로 생성한 스크립트를 document.head에 추가
//     document.head.appendChild(script);

//     // 컴포넌트 언마운트 시 스크립트를 제거
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   // 지도가 렌더링될 div 요소
//   return (
//     <RenderAfterNavermapsLoaded
//       ncpClientId={"iyfdv60svn"} // 자신의 네이버 계정에서 발급받은 Client ID
//       error={<p>Maps Load Error</p>}
//       loading={<p>Maps Loading...</p>}
//     >
//       <NaverMap
//         id="react-naver-maps-introduction"
//         style={{ width: "100%", height: "100vh" }}
//         center={{ lat: 37.497175, lng: 127.027926 }}
//       />
//     </RenderAfterNavermapsLoaded>
//   );
// };

// export default Map;
import { NavermapsProvider } from "react-naver-maps";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import React from "react";
import MapComponent from "../components/MapComponent";

function Map() {
  return (
    <>
      <NavermapsProvider ncpClientId="iyfdv60svn">
        <GlobalStyle />
        <Layout>
          <MapComponent />
        </Layout>
      </NavermapsProvider>
    </>
  );
}
export default Map;
