import Link from "next/link";
import { getAllPostsMeta } from "@/lib/markdown";

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 5);

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        최근 공지사항
      </h2>
      <table className="w-full text-left">
        <tbody>
          {posts.map((post, idx) => (
            <tr
              key={post.slug.join("/")}
              className="border-b last:border-b-0 hover:bg-gray-100 transition"
            >
              <td className="py-3 pl-2">
                <Link
                  href={`/posts/${post.slug.join("/")}`}
                  className="hover:underline text-gray-800 font-semibold"
                >
                  공지사항 {posts.length - idx}
                </Link>
              </td>
              <td
                className="py-3 pr-2 text-right text-gray-700"
                style={{ minWidth: 100 }}
              >
                {post.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
