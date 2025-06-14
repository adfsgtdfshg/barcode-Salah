@echo off
cd /d D:\barcode-Salah-main\barcode-Salah-main

echo 🔄 جاري رفع التعديلات إلى GitHub...

git add .
git commit -m "Auto update" >nul 2>&1

git push origin main >push_output.txt 2>&1

findstr "To https://github.com" push_output.txt >nul
if %errorlevel%==0 (
    echo ✅ تم رفع التحديثات بنجاح إلى GitHub.
) else (
    echo ❌ فشل الرفع! يرجى التحقق من الاتصال أو إعدادات Git.
    echo --- تفاصيل الخطأ ---
    type push_output.txt
)

del push_output.txt >nul 2>&1
pause
