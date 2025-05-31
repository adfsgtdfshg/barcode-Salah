@echo off
cd /d %~dp0
echo Enter commit message:
set /p msg=
if "%msg%"=="" (
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set d=%%d-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set t=%%a-%%b
    set commit_msg=Auto update %date:~0,4%-%date:~5,2%-%date:~8,2%_%time:~0,2%%time:~3,2%
) else (
    set commit_msg=%msg%
)
git add .
git commit -m "%commit_msg%"
git push origin main
pause