export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-center text-4xl font-bold text-slate-900">Xin chao!</h1>
        <p className="mb-2 text-lg text-slate-700">
          Ho va ten: <strong>JKhoa</strong>
        </p>
        <p className="mb-2 text-lg text-slate-700">
          MSSV: <strong>Chua cap nhat</strong>
        </p>
        <p className="mb-2 text-lg text-slate-700">
          Lop: <strong>CTK46</strong>
        </p>
        <p className="mb-6 text-lg text-slate-700">
          Mon: <strong>Cac cong nghe moi trong PTPM</strong>
        </p>

        <div className="mb-6 rounded-lg bg-blue-100 p-4 text-blue-800">
          Day la project Next.js dau tien cua toi.
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">So thich</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              <li>Lap trinh web</li>
              <li>Hoc AI tools</li>
              <li>Doc tai lieu cong nghe</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">Muc tieu hoc tap</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              <li>Nam vung Next.js App Router</li>
              <li>Lam chu Git workflow</li>
              <li>Ung dung AI vao phat trien phan mem</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
