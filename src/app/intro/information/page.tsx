import { getPostData } from "@/lib/markdown";

export default async function InformationPage() {
  const post = await getPostData(["intro", "information", "information"]);
  return (
    <div className="prose max-w-2xl w-full mx-auto my-8">
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
