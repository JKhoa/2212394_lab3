import Link from "next/link";
import Counter from "@/components/counter";

export default function Home() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Xin chào! 👋 Tôi là <span className="text-emerald-600 dark:text-emerald-400">JKhoa</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
            Sinh viên Công nghệ Thông tin — Đại học Đà Lạt (CTK46)
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-6">
            Đam mê phát triển web và các công nghệ mới
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Xem dự án
            </Link>
            <Link
              href="/blog"
              className="border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 px-6 py-2 rounded-lg transition-colors"
            >
              Xem Blog
            </Link>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">Sở thích</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✨ Lập trình web</li>
              <li>🤖 Khám phá AI tools</li>
              <li>📚 Đọc tài liệu công nghệ</li>
              <li>🚀 Xây dựng dự án thực tế</li>
            </ul>
          </div>

          <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 border border-violet-200 dark:border-violet-800">
            <h2 className="text-2xl font-bold mb-4 text-violet-900 dark:text-violet-100">Mục tiêu học tập</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Nắm vững Next.js App Router</li>
              <li>✅ Làm chủ Git workflow</li>
              <li>✅ Ứng dụng AI vào phát triển phần mềm</li>
              <li>✅ Xây dựng portfolio chuyên nghiệp</li>
            </ul>
          </div>
        </section>

        {/* Counter Section */}
        <section className="bg-gradient-to-r from-emerald-50 to-violet-50 dark:from-emerald-900/20 dark:to-violet-900/20 rounded-lg p-8 text-center mb-16 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Bộ đếm tương tác (Client Component)</h2>
          <div className="flex justify-center">
            <Counter />
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Kỹ năng</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JavaScript", "TypeScript", "React", "Next.JS", "Tailwind CSS", "Node.js", "Git", "SQL"].map((skill) => (
              <div key={skill} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-100 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
