import { getPostData, getAllPostsMeta } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // notice 폴더 내의 모든 마크다운 파일만 필터링
  const posts = getAllPostsMeta().filter(
    (post) => post.slug[0] === "notice" && post.id
  );
  return posts.map((post) => ({ slug: String(post.id) }));
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const posts = getAllPostsMeta().filter(
    (post) => post.slug[0] === "notice" && post.id
  );
  const { slug } = await params;
  const post = posts.find((post) => String(post.id) === slug);
  if (!post) return notFound();
  const full = await getPostData(post.slug);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{full.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: full.contentHtml }} />
    </div>
  );
}
