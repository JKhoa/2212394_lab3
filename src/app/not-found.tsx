import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Trang không tồn tại</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
        </p>
        <Link
          href="/"
          className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors inline-block font-medium"
        >
          ← Về trang chủ
        </Link>
      </div>
    </div>
  );
}
