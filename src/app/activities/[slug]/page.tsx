import { getPostData, getAllPostsMeta } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPostsMeta().filter(
    (post) => post.slug[0] === "activities" && post.id
  );
  return posts.map((post) => ({ slug: String(post.id) }));
}

export default async function ActivityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getAllPostsMeta().filter(
    (post) => post.slug[0] === "activities" && post.id
  );
  const post = posts.find((post) => String(post.id) === params.slug);
  if (!post) return notFound();
  const full = await getPostData(post.slug);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{full.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: full.contentHtml }} />
    </div>
  );
}
