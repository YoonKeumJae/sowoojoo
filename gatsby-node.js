const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent); // 부모 노드 가져오기
    const sourceInstanceName = parent.sourceInstanceName;

    if (sourceInstanceName === "activities") {
      createNodeField({
        node,
        name: "slug",
        value: `/activities/${parent.name}`, // 활동내역 폴더 이름을 슬러그로 사용
      });
    } else if (sourceInstanceName === "notice") {
      const slug = createFilePath({
        node,
        getNode,
        basePath: "content/notice", // 공지사항 경로와 일치하도록 설정
      });
      createNodeField({
        node,
        name: "slug",
        value: `/notice${slug}`, // 공지사항의 파일 경로를 기반으로 슬러그 생성
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          fileAbsolutePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    if (post.fileAbsolutePath.includes("/content/activities/")) {
      createPage({
        path: post.fields.slug,
        component: path.resolve("./src/templates/activity-post.js"),
        context: {
          slug: post.fields.slug.split("/").pop(), // 폴더 이름만 전달
        },
      });
    } else if (post.fileAbsolutePath.includes("/content/notice/")) {
      createPage({
        path: post.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: post.fields.slug, // 슬러그 필드 그대로 전달
        },
      });
    }
  });
};
