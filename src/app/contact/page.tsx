export default function ContactPage() {
  return (
    <div className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-emerald-600">Liên hệ</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-900/10 rounded-lg p-8 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Thông tin liên hệ</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong className="text-emerald-600">📧 Email:</strong>{" "}
                <a
                  href="mailto:jkhoa@sv.dlu.edu.vn"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  jkhoa@sv.dlu.edu.vn
                </a>
              </p>
              <p>
                <strong className="text-emerald-600">🐙 GitHub:</strong>{" "}
                <a
                  href="https://github.com/JKhoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  github.com/JKhoa
                </a>
              </p>
              <p>
                <strong className="text-emerald-600">📍 Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên
                Vương, Đà Lạt
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-violet-50 dark:from-violet-900/20 dark:to-violet-900/10 rounded-lg p-8 border border-violet-200 dark:border-violet-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Về tôi</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tôi là một lập trình viên đam mê với các công nghệ web hiện đại. Luôn tìm tìm hiểu những công nghệ mới và ứng dụng chúng vào dự án thực tế.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
