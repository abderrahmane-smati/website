@echo off

for /f %%q in ("%~dp0.") do set CurrDirName=%%~nxq
echo %CurrDirName%

e:\tools\winrar\WINRAR a -hpHamdi67 _%CurrDirName%_%date:~6,4%%date:~3,2%%date:~0,2% @___wr_website_Files.txt
