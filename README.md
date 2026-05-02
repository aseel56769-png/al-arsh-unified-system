# Al-Arsh Unified System (نظام العرش الموحد)

نظام متكامل يجمع بين تقنيات الذكاء الاصطناعي المتقدمة والتحليل السيبراني.

## هيكل المشروع

- `server/`: الخادم الخلفي (Backend) مبني باستخدام Node.js و TypeScript.
- `client/`: الواجهة الأمامية (Frontend) مبنية باستخدام React و TypeScript.

## تعليمات النشر (Deployment)

### المتطلبات الأساسية
- Node.js (v20+)
- GitHub Account
- Railway Account (للنشر التلقائي)

### النشر على Railway
1. قم بربط مستودع GitHub الخاص بك بمنصة Railway.
2. أضف المتغيرات البيئية التالية في إعدادات Railway:
   - `OPENROUTER_API_KEY`
   - `PERPLEXITY_API_KEY`
   - `RAILWAY_TOKEN` (كـ Secret في GitHub Actions للنشر التلقائي)

### التشغيل المحلي
#### الخادم (Server)
```bash
cd server
npm install
npm run dev
```

#### الواجهة الأمامية (Client)
```bash
cd client
npm install
npm run dev
```

## الترخيص
جميع الحقوق محفوظة لنظام العرش.
