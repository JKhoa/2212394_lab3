export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-emerald-600">Giới thiệu</h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg">
            Xin chào! Tôi là <strong className="text-emerald-600 dark:text-emerald-400">Nguyễn Hoàng Anh Khoa</strong>, sinh viên năm 4
            ngành Công nghệ Thông tin tại <strong>Đại học Đà Lạt</strong>. Hiện tôi là thành viên của lớp CTK46 — Các công nghệ mới trong PTPM.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Kỹ năng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm">
                  <li>• JavaScript / TypeScript</li>
                  <li>• React & Next.JS</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">Backend & Tools</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Node.js / Express</li>
                  <li>• Git & GitHub</li>
                  <li>• SQL & PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Học vấn</h2>
            <div className="bg-gradient-to-r from-emerald-50 to-violet-50 dark:from-emerald-900/20 dark:to-violet-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
              <p className="font-semibold text-lg mb-1">Đại học Đà Lạt</p>
              <p className="text-gray-600 dark:text-gray-400">Cử nhân Công nghệ Thông tin (2021 — 2025)</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">GPA: 3.5/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
