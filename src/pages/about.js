import { useEffect } from "react";
import { navigate } from "gatsby";

const AboutPage = () => {
  useEffect(() => {
    navigate("/about/info"); // /about/info로 리다이렉션
  }, []);

  return null; // 리다이렉션만 처리하므로 아무것도 렌더링하지 않음
};

export default AboutPage;
