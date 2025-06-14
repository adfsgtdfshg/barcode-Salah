@echo off
:: ============================================================================
::  Git Auto‑Push Script
::  Path   : D:\barcode-Salah-main\barcode-Salah-main
::  Purpose: Stage all changes, commit with a default or custom message,
::           push to the remote “main” branch, and report success / failure.
:: ============================================================================

:: --- CONFIGURATION ----------------------------------------------------------
set "PROJECT_DIR=D:\barcode-Salah-main\barcode-Salah-main"
set "DEFAULT_MSG=Auto update"
:: ---------------------------------------------------------------------------

cd /d "%PROJECT_DIR%" || (
    echo [ERROR] Project directory not found: %PROJECT_DIR%
    pause
    goto :eof
)

:: -------- Commit message (interactive / default) ---------------------------
set "COMMIT_MSG=%DEFAULT_MSG%"
echo Enter commit message (leave blank for "%DEFAULT_MSG%"):
set /p "USER_MSG=> "

if not "%USER_MSG%"=="" set "COMMIT_MSG=%USER_MSG%"

:: ---------------- Git operations ------------------------------------------
echo.
echo Staging changes...
git add .

echo Committing changes...
git commit -m "%COMMIT_MSG%" >nul 2>&1

echo Pushing to GitHub...
git push origin main > "%TEMP%\push_output.txt" 2>&1
set "PUSH_STATUS=%ERRORLEVEL%"

:: ---------------- Result ---------------------------------------------------
echo.
if "%PUSH_STATUS%"=="0" (
    echo [SUCCESS] Changes pushed to GitHub.
) else (
    echo [FAILURE] Push failed. Details:
    type "%TEMP%\push_output.txt"
)

del "%TEMP%\push_output.txt" >nul 2>&1
pause
