import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import NavBar from "./_components/NavBar";

export const metadata: Metadata = {
  title: "소우주",
  description: "소우주 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#f7f8fa] min-h-screen flex flex-col">
        {/* 상단 로고 및 네비게이션 */}
        <header className="flex flex-col items-center pt-8 pb-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="로고"
              width={160}
              height={80}
              className="h-20 mb-2"
            />
          </Link>
          <NavBar />
        </header>
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {children}
        </main>
        {/* 푸터 */}
        <footer className="bg-[#bdbdbd]/20 py-6 text-center text-gray-600 text-sm mt-12">
          <div>© 2025 소우주. All rights reserved.</div>
          <div>
            문의:{" "}
            <a
              href="mailto:contact@sowoojoo.com"
              className="underline text-blue-600"
            >
              contact@sowoojoo.com
            </a>
          </div>
          <div>주소: 서울특별시 소우주로 123</div>
        </footer>
      </body>
    </html>
  );
}
