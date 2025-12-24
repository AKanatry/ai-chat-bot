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
- **Veritabanı:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Stil:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Kimlik Doğrulama:** [NextAuth.js](https://next-auth.js.org/)

---

### 📂 Proje Yapısı

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
```
## 🛠️ Kurulum ve Çalıştırma Kılavuzu

Bu proje, **Next.js**, **Prisma** ve **Vercel AI SDK** kullanılarak geliştirilmiştir. Projeyi yerel ortamınızda sorunsuz çalıştırmak için aşağıdaki adımları sırasıyla takip edin.

## 📋 Ön Koşullar (Prerequisites)

Başlamadan önce bilgisayarınızda şunların kurulu olduğundan emin olun:
* **Node.js** (Sürüm 18 veya üzeri)
* **npm** (Node.js ile birlikte gelir)
* **Git**

---

## 🚀 Adım Adım Kurulum

### 1. Projeyi Bilgisayarınıza İndirin
Terminali açın ve projeyi klonlayın:

```bash
git clone https://github.com/AKanatry/ai-chat-bot.git
cd ai-chat-bot
```
### 📦 2. Bağımlılıkları Yükleyin
Projenin çalışması için gerekli olan paketleri indirmek için terminalde şu komutu çalıştırın:

```bash
npm install
```
🔑 3. Çevresel Değişkenleri (.env) Ayarlayın  
Projenin ana dizininde .env adında yeni bir dosya oluşturun. Aşağıdaki şablonu kopyalayıp kendi bilgilerinizle 
doldurun:

🗄️ Veritabanı Bağlantısı (PostgreSQL)   
```
DATABASE_URL="postgresql://kullanici:sifre@localhost:5432/mydb"
```

🤖 Yapay Zeka API Anahtarı (Google Gemini)
```
GOOGLE_GENERATIVE_AI_API_KEY="AIzaSy_SENIN_API_ANAHTARIN..."
```

# 🔐 NextAuth Ayarları (Giriş Güvenliği)
```
# Terminalde `openssl rand -base64 32` komutu ile random bir key üretebilirsiniz.
NEXTAUTH_SECRET="gizli-random-anahtar"
NEXTAUTH_URL="http://localhost:3000"
``` 

  
🔄 4. Veritabanını Hazırlayın (Prisma)  
Prisma şemasını (Schema) veritabanı ile senkronize etmek ve tabloları oluşturmak için:
``` 
npm run dev

```  
🚀 5. Uygulamayı Başlatın  
Kurulum tamamlandı! Geliştirme sunucusunu ayağa kaldırmak için:
```  
npm run dev
```  

<img width="957" height="1075" alt="Image" src="https://github.com/user-attachments/assets/d11f02a9-1053-4ceb-9ef1-505b5b06c94f" />
<img width="954" height="1078" alt="Image" src="https://github.com/user-attachments/assets/af0dfe9d-72e3-4ca5-b809-3fbd19d4b5de" />
<<<<<<< HEAD
<img width="357" height="1077" alt="Image" src="https://github.com/user-attachments/assets/eb4d1d62-b397-4938-bb26-d06cf7a6803c" /> 
=======

