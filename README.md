# 🤖 Yapay Zeka Destekli Sohbet Sistemi (AI Chat Bot)

![Project Status](https://img.shields.io/badge/Status-Tamamland%C4%B1-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.8-blue)

Bu proje, modern web teknolojileri ve büyük dil modelleri (LLM) kullanılarak geliştirilmiş, gerçek zamanlı bir sohbet uygulamasıdır. Kullanıcıların yapay zeka ile akıcı bir şekilde sohbet etmesini, geçmiş konuşmalarını kaydetmesini ve yönetmesini sağlar.

## 🚀 Özellikler

* **Gerçek Zamanlı Yanıt (Streaming UI):** Yapay zeka yanıtları, kelime kelime ekrana yansıtılır (Vercel AI SDK).
* **Sohbet Geçmişi:** Tüm konuşmalar veritabanında saklanır ve sol menüden erişilebilir.
* **Güvenli Oturum Açma:** NextAuth.js ile güvenli kimlik doğrulama (Google/Email).
* **Akıllı Başlıklandırma:** Sohbet içeriğine göre otomatik başlık oluşturma.
* **Kod & Markdown Desteği:** Kod blokları renklendirilir ve matematiksel ifadeler desteklenir.
* **Responsive Tasarım:** Mobil ve masaüstü cihazlarla tam uyumlu arayüz.

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Dil:** [TypeScript](https://www.typescriptlang.org/)
* **Yapay Zeka:** [Vercel AI SDK](https://sdk.vercel.ai/docs) (OpenAI / Anthropic Provider)
* **Veritabanı:** [PostgreSQL](https://www.postgresql.org/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Stil:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
* **Kimlik Doğrulama:** [NextAuth.js](https://next-auth.js.org/)


### 📦 2. Bağımlılıkları Yükleyin
Projenin çalışması için gerekli olan paketleri indirmek için terminalde şu komutu çalıştırın:

```bash
npm install




# 🗄️ Veritabanı Bağlantısı (PostgreSQL)
DATABASE_URL="postgresql://kullanici:sifre@localhost:5432/mydb"

# 🤖 Yapay Zeka API Anahtarı (Google Gemini)
GOOGLE_GENERATIVE_AI_API_KEY="AIzaSy_SENIN_API_ANAHTARIN..."

# 🔐 NextAuth Ayarları (Giriş Güvenliği)
# Terminalde `openssl rand -base64 32` komutu ile random bir key üretebilirsiniz.
NEXTAUTH_SECRET="gizli-random-anahtar"
NEXTAUTH_URL="http://localhost:3000"




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





