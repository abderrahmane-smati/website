@echo off

for /f %%q in ("%~dp0.") do set CurrDirName=%%~nxq
echo %CurrDirName%

set winrar_chemin=
if exist e:\tools\winrar\WINRAR.exe set winrar_chemin=e:\tools\winrar\
if exist d:\tools\winrar\WINRAR.exe set winrar_chemin=d:\tools\winrar\

%winrar_chemin%WINRAR a -hpHamdi67 _%CurrDirName%_%date:~6,4%%date:~3,2%%date:~0,2% @___wr_website_Files.txt
