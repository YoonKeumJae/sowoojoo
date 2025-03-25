const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `content` }); // basePath 설정
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
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
        component: path.resolve("./src/templates/activity-post.js"), // 활동 게시글 템플릿
        context: {
          slug: post.fields.slug, // 슬러그 필드 그대로 전달
        },
      });
    } else if (post.fileAbsolutePath.includes("/content/notice/")) {
      createPage({
        path: post.fields.slug,
        component: path.resolve("./src/templates/post-template.js"), // 공지사항 템플릿
        context: {
          slug: post.fields.slug, // 슬러그 필드 그대로 전달
        },
      });
    }
  });
};
