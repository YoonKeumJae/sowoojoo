import { getPostData } from "@/lib/markdown";

export default async function HistoryPage() {
  const post = await getPostData(["intro", "history", "history"]);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
