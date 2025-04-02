// gatsby-browser.js

export const onInitialClientRender = () => {
  // 이미 스크립트가 로드되어 있다면 중복 추가하지 않음
  if (!document.querySelector('script[src^="https://openapi.map.naver.com/openapi/v3/maps.js"]')) {
    const script = document.createElement("script");
    // ncpClientId 부분에는 실제 발급받은 Client ID를 넣으세요.
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=iyfdv60svn";
    script.async = true;
    script.onload = () => {
      console.log("네이버 지도 API 스크립트 로드 완료");
    };
    document.head.appendChild(script);
  }
};
