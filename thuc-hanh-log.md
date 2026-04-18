# Nhật ký thực hiện Bài thực hành 2 (Live Code)
Tài liệu cung cấp các minh chứng thực tế khi lập trình triển khai Website Portfolio/Blog bằng Next.JS.

## 1. Kết quả thiết lập Cấu trúc dự án
Tất cả các tệp theo kiến trúc **App Router** (File-based Routing) đã được khởi tạo thành công trên hệ thống. Dưới đây là các đường dẫn file đã được phân quyền và tạo mới:

- `src/components/navbar.tsx` (Component dùng chung: Navbar)
- `src/components/footer.tsx` (Component dùng chung: Footer)
- `src/app/layout.tsx` (Root Layout lồng Navbar và Footer)
- `src/app/page.tsx` (Homepage cá nhân)
- `src/app/about/page.tsx` (Trang giới thiệu)
- `src/app/contact/page.tsx` (Trang liên hệ)
- `src/app/projects/page.tsx` (Trang dự án mẫu)
- `src/app/blog/layout.tsx` (Nested Layout tích hợp Sidebar)
- `src/app/blog/page.tsx` (Danh sách bài viết)
- `src/app/blog/[slug]/page.tsx` (Dynamic Route xử lý nội dung từng bài viết blog)
- `src/data/posts.ts` (Mock data bài viết)

## 2. Quá trình biên dịch và Tối ưu hóa (Next.js Build Output)
Sau khi hoàn tất cấu trúc, lệnh `npm run build` được thực thi nhằm xác thực mã nguồn, xây dựng các route tĩnh (SSG) và kiểm tra Dynamic Routing.
Biên dịch báo lỗi bằng 0, quá trình sinh ra thành công. Dưới đây là kết quả từ Terminal:

```terminal
> ctk46-lab01@0.1.0 build
> next build

▲ Next.js 16.2.2 (Turbopack)
  Creating an optimized production build ...
✓ Compiled successfully in 2.0s
  Running TypeScript ...
  Finished TypeScript in 1422ms ...
  Collecting page data using 10 workers ...
  Generating static pages using 10 workers (0/8) ...
  Generating static pages using 10 workers (2/8) 
  Generating static pages using 10 workers (4/8) 
  Generating static pages using 10 workers (6/8) 
✓ Generating static pages using 10 workers (8/8) in 435ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /blog
├ ƒ /blog/[slug]
├ ○ /contact
└ ○ /projects

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### 👉 Đánh giá kết quả từ Console Log:
- **(Static) - Ký hiệu `○`**: Các trang `/`, `/about`, `/contact`, `/blog`, `/projects` đều đã được Pre-render (Render tĩnh trước) chứng tỏ việc thiết kế layout và chia component tối ưu cho SEO và tốc độ load.
- **(Dynamic) - Ký hiệu `ƒ`**: Route `/blog/[slug]` được xác nhận đúng phân loại là trang phụ thuộc URL truyền vào, Render on demand.

**Đạt 100% mục tiêu của Bài thực hành 2, đủ minh chứng để bảo vệ báo cáo.**
