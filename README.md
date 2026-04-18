# CTK46 — Lab 02

Bài thực hành 2 cho môn "Các công nghệ mới trong phát triển phần mềm".

## Công nghệ sử dụng

- Next.js 16.2.2 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks (useState)
- ESLint & Prettier

## Cách chạy

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

## Nội dung đã thực hiện

### Phần 3: Dynamic Routes & Mock Data
- ✅ Thêm trường `author` vào interface `Post`
- ✅ Cập nhật toàn bộ blog posts với thông tin tác giả
- ✅ Tạo dynamic route `/blog/[slug]/page.tsx`
- ✅ Tạo catch-all route `/blog/[...slug]/page.tsx` để xử lý URL không hợp lệ
- ✅ Tạo trang 404 tùy chỉnh `/blog/[slug]/not-found.tsx`

### Phần 4: Loading State & Error Boundaries
- ✅ `src/app/blog/loading.tsx` — Skeleton loading animation
- ✅ `src/app/blog/error.tsx` — Error boundary xử lý lỗi runtime
- ✅ `/blog/[slug]/not-found.tsx` — 404 page tùy chỉnh

### Phần 5: Tailwind CSS & Responsive Design
- ✅ Navbar responsive với hamburger menu trên mobile
- ✅ Thay đổi color scheme: **Blue → Emerald** (xanh lá)
- ✅ Projects page: grid responsive (1 cột mobile, 2 cột tablet/desktop)
- ✅ **Dark mode** hỗ trợ toàn bộ ứng dụng (dark: classes)
- ✅ Cải thiện home page với skills section và CTA buttons

### Phần 6: Server vs Client Components
- ✅ **Counter** — Client Component (useState): ±1 với state
- ✅ **LikeButton** — Client Component (useState): like/unlike với counter
- ✅ **CopyButton** — Client Component: copy text to clipboard
- ✅ Thêm Counter vào home page
- ✅ Thêm LikeButton vào blog post page

## Các file chính

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── page.tsx (dynamic route)
│   │   │   └── not-found.tsx (404 page)
│   │   ├── [...slug]/page.tsx (catch-all route)
│   │   ├── error.tsx (error boundary)
│   │   ├── loading.tsx (skeleton loading)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── page.tsx (home page với Counter)
│   ├── projects/page.tsx (responsive grid)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── layout.tsx
├── components/
│   ├── counter.tsx (Client Component)
│   ├── like-button.tsx (Client Component)
│   ├── copy-button.tsx (Client Component)
│   ├── navbar.tsx (responsive)
│   └── footer.tsx
└── data/
    └── posts.ts (mock data với author field)
```

## Ghi chú

- Dự án được xây dựng dựa trên bài thực hành 01 (Lab 01)
- Tất cả các tính năng được kiểm tra và hoạt động bình thường
- Hỗ trợ dark mode (thêm `dark:` prefix để bật)
- Responsive design trên tất cả các thiết bị

## Repository

- **GitHub**: https://github.com/JKhoa/2212394_Lab2
- **Branch**: main

