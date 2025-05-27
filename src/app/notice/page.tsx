import Link from "next/link";
import { getAllPostsMeta } from "@/lib/markdown";

const PAGE_SIZE = 10;

export default async function NoticePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const posts = getAllPostsMeta().filter(
    (post) => post.slug[0] === "notice" && post.id
  );
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const paginated = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="max-w-2xl mx-auto my-8 w-full">
      <h1 className="text-3xl font-bold mb-6">공지사항</h1>
      <div className="border-b-4 border-black mb-2" />
      <table className="w-full">
        <tbody>
          {paginated.map((post) => (
            <tr key={post.id} className="border-b">
              <td className="py-3 pl-2 text-left">
                <Link href={`/notice/${post.id}`} className="hover:underline">
                  {post.title}
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
      {/* 페이지네이션 */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`?page=${i + 1}`}
            className={`w-10 h-10 flex items-center justify-center rounded border text-lg font-semibold ${
              page === i + 1
                ? "bg-[#e6b14c] text-white border-[#e6b14c]"
                : "bg-white text-[#e6b14c] border-[#e6b14c] hover:bg-[#fff7e6]"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
