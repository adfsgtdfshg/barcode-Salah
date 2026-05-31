# هيكل المشروع - Barcode Salah

## نظرة عامة
تطبيق قارئ وموّلد رموز شريطية (Barcode) متعدد الأنواع مع واجهة ويب وتطبيق Android.

## هيكل المجلدات

```
barcode-Salah/
├── app/                           # تطبيق Android الرئيسي
│   ├── src/
│   │   ├── main/
│   │   │   ├── kotlin/            # شفرة Kotlin
│   │   │   │   └── de/markusfisch/android/binaryeye/
│   │   │   │       ├── activity/  # الأنشطة (Activities)
│   │   │   │       ├── fragment/  # الأجزاء (Fragments)
│   │   │   │       ├── service/   # الخدمات (Services)
│   │   │   │       ├── db/        # قاعدة البيانات
│   │   │   │       └── util/      # الأدوات المساعدة
│   │   │   ├── res/               # الموارد
│   │   │   │   ├── layout/        # تخطيطات XML
│   │   │   │   ├── drawable/      # الرسوميات
│   │   │   │   ├── values/        # القيم والثوابت
│   │   │   │   └── menu/          # قوائم التطبيق
│   │   │   └── AndroidManifest.xml
│   │   └── test/                  # الاختبارات
│   ├── build.gradle               # إعدادات Gradle للتطبيق
│   └── proguard-rules.pro          # قواعد ProGuard
│
├── web/                           # تطبيق الويب
│   ├── src/
│   │   ├── js/                    # ملفات JavaScript
│   │   │   ├── core/              # الوظائف الأساسية
│   │   │   ├── ui/                # واجهة المستخدم
│   │   │   └── workers/           # Web Workers
│   │   ├── css/                   # ملفات الأنماط
│   │   └── assets/                # الموارد (صور، رموز)
│   ├── index.html                 # الصفحة الرئيسية
│   ├── manifest.webmanifest       # ملف PWA
│   └── sw.js                      # Service Worker
│
├── scripts/                       # السكريبتات والأتمتة
│   ├── build.sh                   # بناء المشروع
│   ├── deploy.sh                  # نشر المشروع
│   └── auto-update.bat            # تحديث Git
│
├── docs/                          # التوثيق
│   ├── ARCHITECTURE.md            # معمارية المشروع
│   ├── SETUP.md                   # إرشادات الإعداد
│   ├── CONTRIBUTING.md            # إرشادات المساهمة
│   └── API.md                     # توثيق API
│
├── config/                        # ملفات الإعدادات
│   ├── gradle.properties
│   ├── build.gradle
│   └── settings.gradle
│
├── tools/                         # أدوات وملفات داعمة
│   └── fastlane/                  # إعدادات Fastlane للنشر
│
├── data/                          # البيانات والملفات
│   ├── sample/                    # عينات الاختبار
│   └── export/                    # ملفات التصدير
│
├── .github/                       # إعدادات GitHub
│   ├── workflows/                 # GitHub Actions
│   └── ISSUE_TEMPLATE/
│
├── README.md                      # ملف التعريف
├── LICENSE                        # الترخيص
├── .gitignore                     # ملف استثناء Git
└── CHANGELOG.md                   # سجل التغييرات
```

## توضيح المجلدات الرئيسية

### app/ - تطبيق Android
- **kotlin/**: شفرة Kotlin المصدرية المنظمة حسب المسؤولية
- **res/**: جميع موارد Android (الصور، التخطيطات، النصوص)
- **test/**: اختبارات الوحدة واختبارات التكامل

### web/ - تطبيق الويب
- **src/js/core/**: منطق القراءة والكتابة الأساسي
- **src/js/ui/**: عناصر واجهة المستخدم
- **src/css/**: أنماط CSS منظمة
- **assets/**: الصور والرموز

### scripts/ - الأتمتة
- سكريبتات البناء والنشر
- أتمتة مهام Git

### docs/ - التوثيق
- معمارية النظام
- إرشادات الإعداد والمساهمة

## الفوائد

✅ **تنظيم واضح**: كل مكون في مكانه المناسب
✅ **سهولة الصيانة**: سهل العثور على الأكواد والملفات
✅ **قابلية التوسع**: إضافة مميزات جديدة بسهولة
✅ **المتابعة**: تتبع التغييرات بسهولة
✅ **التعاون**: فريق يعمل بكفاءة أعلى
