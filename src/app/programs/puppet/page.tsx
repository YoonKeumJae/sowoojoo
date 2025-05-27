import { getPostData } from "@/lib/markdown";

export default async function PuppetPage() {
  const post = await getPostData(["programs", "puppet", "puppet"]);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
