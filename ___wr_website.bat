@echo off

for /f %%q in ("%~dp0.") do set CurrDirName=%%~nxq
echo %CurrDirName%

d:\util\winrar\WINRAR a -hpHamdi67 _%CurrDirName% @___wr_website_Files.txt
