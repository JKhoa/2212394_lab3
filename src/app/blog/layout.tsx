export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex gap-8 flex-col lg:flex-row">
        {/* Nội dung chính */}
        <div className="flex-1">{children}</div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Danh mục</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                Công nghệ
              </li>
              <li className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                Học tập
              </li>
              <li className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                Dự án cá nhân
              </li>
              <li className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors">
                Cuộc sống
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
