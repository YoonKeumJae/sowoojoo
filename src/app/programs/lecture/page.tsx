import { getPostData } from "@/lib/markdown";

export default async function LecturePage() {
  const post = await getPostData(["programs", "lecture", "lecture"]);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
