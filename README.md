# Portfolio — Pham Trung Kien

Portfolio cá nhân được xây dựng với **Next.js 14**, **TypeScript**, và **Tailwind CSS**.

## 🚀 Cài đặt & Chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Mở trình duyệt
# http://localhost:3000
```

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── globals.css      # Global styles + fonts
│   ├── layout.tsx       # Root layout (metadata)
│   └── page.tsx         # Trang chính (gọi tất cả components)
└── components/
    ├── Navbar.tsx        # Navigation bar cố định
    ├── Hero.tsx          # Phần giới thiệu đầu trang
    ├── About.tsx         # Thông tin bản thân
    ├── Skills.tsx        # Kỹ năng & công nghệ
    ├── Projects.tsx      # Danh sách dự án
    ├── Contact.tsx       # Thông tin liên hệ
    └── Footer.tsx        # Footer
```

## ✏️ Tùy chỉnh nội dung

### 1. Thông tin cá nhân
Sửa trong từng component:
- `Hero.tsx` → Tên, mô tả, vị trí
- `About.tsx` → Bio, thông tin cá nhân
- `Contact.tsx` → Email, LinkedIn, GitHub

### 2. Kỹ năng
Sửa mảng `skillGroups` trong `Skills.tsx`

### 3. Dự án
Sửa mảng `projects` trong `Projects.tsx`:
```ts
{
  number: '01',
  title: 'Tên dự án',
  description: 'Mô tả dự án...',
  tags: ['React', 'Tailwind'],
  github: 'https://github.com/...',
  live: 'https://...',   // null nếu chưa có live demo
}
```

## 🌐 Deploy lên Vercel (miễn phí)

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com) → Import repository
3. Deploy tự động ✅

## 🎨 Màu sắc & Font

Thay đổi trong `tailwind.config.js`:
- `ink` → Màu chữ chính (#0f0f0f)
- `paper` → Màu nền (#f7f5f0)
- `accent` → Màu nhấn (#2563eb)

Font chữ: **DM Serif Display** (tiêu đề) + **DM Sans** (nội dung)
