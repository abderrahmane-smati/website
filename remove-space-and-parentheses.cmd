@echo off
setlocal enabledelayedexpansion

echo.
echo *** Enlever l'espace et les parentheses dans les noms de photos (.jpg)
echo.
pause

for /f "delims=" %%A in ('dir /b /on *.jpg') do (
    set "oldname=%%A"
	
    set "newname=!oldname:(=!"
    set "newname=!newname: =!"
    set "newname=!newname:)=!"
	
    echo Renommer: "!oldname!"  vers  "!newname!"
	
    ren "%%A" "!newname!"
)

endlocal
pause
