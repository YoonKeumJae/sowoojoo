export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f7f8fa] min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">페이지를 찾을 수 없습니다.</p>
      <a
        href="/"
        className="px-6 py-2 rounded-full bg-[#e6b14c] text-white font-semibold shadow hover:bg-[#d49c2a]"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}
