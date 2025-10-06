@echo off
echo *** Renommer les photos ***
echo.

setlocal enabledelayedexpansion

:: === DEMANDER LE PRÉFIXE À L’UTILISATEUR ===
set /p "prefixe=Entrez le prefixe pour les photos: "

:: === CONFIGURATION ===
set "extension=jpg"

:: === COMPTER LE NOMBRE TOTAL DE FICHIERS ===
set /a total=0
for /f "delims=" %%A in ('dir /b /on *.%extension%') do (
    set /a total+=1
)

if %total%==0 (
    echo Aucun fichier .%extension% trouvé dans ce dossier.
    pause
    exit /b
)

:: === DÉTERMINER LA LARGEUR DU NUMÉRO ===
set "width=2"
if %total% geq 100 set "width=3"
if %total% geq 1000 set "width=4"
if %total% geq 10000 set "width=5"

:: === RENOMMAGE ===
set /a compteur=0
for /f "delims=" %%A in ('dir /b /on *.%extension%') do (
    set /a compteur+=1

    :: Formater le numéro avec zéros à gauche selon la largeur
    set "num=00000!compteur!"
    set "num=!num:~-%width%!"

    ren "%%A" "%prefixe%_!num!.%extension%"
)

echo.
echo Renommage termine : %compteur% fichiers renommes avec le prefixe "%prefixe%"
pause
