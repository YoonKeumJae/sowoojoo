/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `swj`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800, // 이미지 최대 너비 설정
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notice",
        path: `${__dirname}/content/notice`, // 공지사항 폴더
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "history",
        path: `${__dirname}/content/history`, // 역사 폴더
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "info",
        path: `${__dirname}/content/info`, // 소개 폴더 추가
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "footer",
        path: `${__dirname}/content/footer`, // Footer 폴더 추가
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "activities",
        path: `${__dirname}/content/activities`, // 활동내역 폴더 추가
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800, // 이미지 최대 너비 설정
            },
          },
        ],
      },
    },
  ],
};
