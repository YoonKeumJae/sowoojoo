"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  {
    label: "소개",
    href: "/intro/information",
    children: [
      { label: "정보", href: "/intro/information" },
      { label: "연혁", href: "/intro/history" },
    ],
  },
  {
    label: "교육 프로그램",
    href: "/programs/lecture",
    children: [
      { label: "강의", href: "/programs/lecture" },
      { label: "체험", href: "/programs/exp" },
      { label: "인형극", href: "/programs/puppet" },
    ],
  },
  { label: "활동내역", href: "/activities" },
  { label: "공지사항", href: "/notice" },
  { label: "오시는 길", href: "/map" },
];

export default function NavBar() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <nav className="flex gap-3 mt-2 relative z-10">
      {NAV_ITEMS.map((item, idx) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setOpenIdx(idx)}
          onMouseLeave={() => setOpenIdx(null)}
        >
          <Link
            href={item.href}
            className="px-6 py-2 rounded-full bg-white shadow text-[#e6b14c] font-semibold text-base border border-[#f3e3c2] hover:bg-[#fff7e6]"
          >
            {item.label}
          </Link>
          {item.children && openIdx === idx && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 flex flex-col bg-white rounded shadow border border-[#f3e3c2] min-w-[120px]">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="px-4 py-2 text-[#e6b14c] hover:bg-[#fff7e6] text-center"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
