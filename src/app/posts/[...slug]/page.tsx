import { notFound } from "next/navigation";
import { getPostData, getAllPostsMeta } from "@/lib/markdown";

interface PostPageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const post = await getPostData(params.slug);
    return (
      <main className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-6">{post.date}</div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 rounded px-2 py-0.5 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    );
  } catch {
    notFound();
  }
}
