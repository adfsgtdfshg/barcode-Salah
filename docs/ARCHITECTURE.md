# معمارية المشروع

## نظرة عامة على المعمارية

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│         (Android UI / Web Interface)                    │
├─────────────────────────────────────────────────────────┤
│                    Business Logic Layer                  │
│      (Barcode Detection / Encoding Logic)               │
├─────────────────────────────────────────────────────────┤
│                    Data Access Layer                     │
│        (Database / File Storage / Preferences)          │
├─────────────────────────────────────────────────────────┤
│                    Utilities & Services                  │
│      (Camera, Permissions, Notifications)              │
└─────────────────────────────────────────────────────────┘
```

## مكونات المشروع

### 1. تطبيق Android (app/)

#### Activities
- **CameraActivity**: شاشة الكاميرا الرئيسية
- **MainActivity**: الشاشة الرئيسية
- **SettingsActivity**: إعدادات التطبيق
- **HistoryActivity**: سجل المسحات

#### Services
- **CameraService**: إدارة الكاميرا
- **BarcodeDetectionService**: كشف الرموز الشريطية
- **SyncService**: مزامنة البيانات

#### Database
- **ScanDatabase**: قاعدة البيانات الرئيسية
- **ScanDAO**: وصول البيانات
- **Models**: نماذج البيانات

#### Utilities
- **PermissionHelper**: إدارة الصلاحيات
- **CameraHelper**: مساعدات الكاميرا
- **BarcodeHelper**: معالجة الرموز الشريطية

### 2. تطبيق الويب (web/)

#### Core Module
```javascript
core/
├── barcode-reader.js      // قراءة الرموز
├── barcode-generator.js   // توليد الرموز
└── barcode-utils.js       // أدوات مساعدة
```

#### UI Module
```javascript
ui/
├── components.js          // مكونات واجهة
├── events.js              // معالجات الأحداث
└── validators.js          // التحقق من الصحة
```

#### Service Worker
- تخزين مؤقت (Caching)
- وظائف Offline
- تحديثات الخلفية

## تدفق البيانات

### مسح الرموز الشريطية
```
User Camera Input
    ↓
Camera Activity / Camera Permission
    ↓
Barcode Detection Service
    ↓
ZXing Library Processing
    ↓
Result Processing
    ↓
Save to Database / Display Result
    ↓
User Action (Copy / Share / Open)
```

### توليد الرموز الشريطية
```
User Input
    ↓
Validation
    ↓
Barcode Generation Engine
    ↓
Image Output
    ↓
Display / Save / Share
```

## الاعتماديات الخارجية

### مكتبات Kotlin/Android
- **ZXing**: مكتبة قراءة وكتابة الرموز الشريطية
- **Room**: قاعدة البيانات المحلية
- **Jetpack**: مكونات Android الحديثة
- **Coroutines**: البرمجة غير المتزامنة

### مكتبات الويب
- **jsQR**: قراءة QR Codes من الويب
- **jsbarcode**: توليد الرموز الشريطية
- **ExcelJS**: تصدير إلى Excel

## معايير الجودة

### اختبارات
- ✅ Unit Tests
- ✅ Integration Tests
- ✅ UI Tests

### أداء
- ⚡ تحسين الذاكرة
- ⚡ تحسين البطارية (للموبايل)
- ⚡ سرعة التحميل (للويب)

### الأمان
- 🔒 حماية البيانات الحساسة
- 🔒 التحقق من المدخلات
- 🔒 تشفير البيانات المحفوظة

## نمط التطوير

- **MVVM**: للواجهة الرسومية
- **Repository Pattern**: للوصول للبيانات
- **Service Layer**: للعمليات المعقدة
- **Dependency Injection**: لإدارة الاعتماديات
