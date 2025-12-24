# 🤖 Yapay Zeka Destekli Sohbet Sistemi (AI Chat Bot)

![Project Status](https://img.shields.io/badge/Status-Tamamland%C4%B1-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.8-blue)

Bu proje, modern web teknolojileri ve büyük dil modelleri (LLM) kullanılarak geliştirilmiş, gerçek zamanlı bir sohbet uygulamasıdır. Kullanıcıların yapay zeka ile akıcı bir şekilde sohbet etmesini, geçmiş konuşmalarını kaydetmesini ve yönetmesini sağlar.

---

## 🚀 Özellikler

- **Gerçek Zamanlı Yanıt (Streaming UI):** Yapay zeka yanıtları kelime kelime ekrana yansıtılır (Vercel AI SDK).
- **Sohbet Geçmişi:** Tüm konuşmalar veritabanında saklanır ve sol menüden erişilebilir.
- **Güvenli Oturum Açma:** NextAuth.js ile güvenli kimlik doğrulama (Google / Email).
- **Akıllı Başlıklandırma:** Sohbet içeriğine göre otomatik başlık oluşturma.
- **Kod & Markdown Desteği:** Kod blokları renklendirilir ve matematiksel ifadeler desteklenir.
- **Responsive Tasarım:** Mobil ve masaüstü cihazlarla tam uyumlu arayüz.

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Dil:** [TypeScript](https://www.typescriptlang.org/)
- **Yapay Zeka:** [Vercel AI SDK](https://sdk.vercel.ai/docs) (OpenAI / Anthropic Provider)
- **Veritabanı:** [PostgreSQL](https://www.postgresql.org/)<img width="1920" height="1080" alt="Desktop Screenshot 2025 12 24 - 04 51 43 12" src="https://github.com/user-attachments/assets/205cb0ba-2ed0-41b0-9547-36200b2d7c8c" />
<img width="1920" height="1080" alt="Desktop Screenshot 2025 12 24 - 04 48 07 62" src="https://github.com/user-attachments/assets/dbe9414a-e121-4423-b9cf-f2da12270cc9" />
<img width="1920" height="1080" alt="Desktop Screenshot 2025 12 24 - 04 47 57 41" src="https://github.com/user-attachments/assets/d166bd3d-8c34-4a35-9027-8b07961dd8b9" />

- **ORM:** [Prisma](https://www.prisma.io/)
- **Stil:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Kimlik Doğrulama:** [NextAuth.js](https://next-auth.js.org/)

---

## 📂 Proje Yapısı

```text
AI_ChatBot/
├── app/                 # Next.js App Router sayfaları ve API rotaları
│   ├── api/chat/        # AI Streaming Endpoint
│   └── page.tsx         # Ana sayfa
├── components/          # UI Bileşenleri (Chat penceresi, Sidebar vb.)
├── lib/                 # Yardımcı fonksiyonlar (Prisma client, Utils)
├── prisma/              # Veritabanı şeması (schema.prisma)
├── public/              # Statik dosyalar
└── .env                 # Ortam değişkenleri (Gizli)
