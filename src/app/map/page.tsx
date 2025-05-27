import { getPostData } from "@/lib/markdown";

export default async function MapPage() {
  const post = await getPostData(["map", "map"]);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
