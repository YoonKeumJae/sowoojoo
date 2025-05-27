import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
  slug: string[];
  id?: number;
}

export interface PostData extends PostMeta {
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// 모든 마크다운 파일의 경로를 재귀적으로 가져옴
function getAllPostFiles(
  dir = postsDirectory,
  parentSlug: string[] = []
): { filePath: string; slug: string[] }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: { filePath: string; slug: string[] }[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      files = files.concat(
        getAllPostFiles(path.join(dir, entry.name), [...parentSlug, entry.name])
      );
    } else if (entry.name.endsWith(".md")) {
      files.push({
        filePath: path.join(dir, entry.name),
        slug: [...parentSlug, entry.name.replace(/\\.md$/, "")],
      });
    }
  }
  return files;
}

// 게시글 목록 반환
export function getAllPostsMeta(): PostMeta[] {
  const files = getAllPostFiles();
  return files
    .map(({ filePath, slug }) => {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        title: data.title || slug[slug.length - 1],
        date: data.date || "",
        tags: data.tags || [],
        slug,
        id: data.id ? Number(data.id) : undefined,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

// 특정 게시글 데이터 반환
export async function getPostData(slug: string[]): Promise<PostData> {
  let filePath = path.join(postsDirectory, ...slug);
  if (!filePath.endsWith(".md")) {
    filePath += ".md";
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    title: data.title || slug[slug.length - 1],
    date: data.date || "",
    tags: data.tags || [],
    slug,
    id: data.id ? Number(data.id) : undefined,
    contentHtml,
  };
}
