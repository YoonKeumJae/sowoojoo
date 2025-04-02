const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const fs = require("fs-extra");

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

exports.onPostBuild = async () => {
  const publicDir = path.join(__dirname, "public");
  const buildDir = path.join(__dirname, "build");

  // public 디렉토리를 build 디렉토리로 이동
  if (fs.existsSync(publicDir)) {
    await fs.remove(buildDir); // 기존 build 디렉토리 삭제
    await fs.move(publicDir, buildDir); // public 디렉토리를 build로 이동
    console.log("Build directory moved to 'build'.");
  }
};
