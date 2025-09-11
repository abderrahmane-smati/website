// ***************************************** GoTop Button
// Get the button
const goTopBtn = document.getElementById("goTopBtn");
const dureeAffichage_goTopBtn = 5000; // 5 s
var identifiant_CacherGoTop;

function razTimerDetectionMouvementSouris() {
    clearTimeout(identifiant_CacherGoTop);
    if (window.getComputedStyle(goTopBtn).opacity != 0) {
        identifiant_CacherGoTop = setTimeout(() => { goTopBtn.style.opacity = 0; }, dureeAffichage_goTopBtn);
    };
};

window.addEventListener("mousemove", razTimerDetectionMouvementSouris);
window.addEventListener("mousedown", razTimerDetectionMouvementSouris);
window.addEventListener("keydown", razTimerDetectionMouvementSouris); // optionnel : clavier
window.addEventListener("scroll", razTimerDetectionMouvementSouris); // optionnel : défilement

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (window.getComputedStyle(goTopBtn).opacity == 0) {
            // if (window.getComputedStyle(goTopBtn).display == 'none') {
            // console.log('window.getComputedStyle(goTopBtn).display:', window.getComputedStyle(goTopBtn).display);
            goTopBtn.style.opacity = 1;
            // goTopBtn.style.display = "block";
            goTopBtn.setAttribute('doit-etre-affiche', 'true');
            //clearTimeout(identifiant_CacherGoTop);  // annuler une éventuelle action lancée par setTimeout
            identifiant_CacherGoTop = setTimeout(() => { goTopBtn.style.opacity = 0; }, dureeAffichage_goTopBtn);
            // console.log('prog.caché (a)');
            // Le bouton est affiché pendant une durée (dureeAffichage_goTopBtn ms), ensuite caché si aucun mouvement n'est fait
            // console.log('affiché', identifiant_CacherGoTop);
        };
    } else {
        if (window.getComputedStyle(goTopBtn).opacity != 0) {
            // if (window.getComputedStyle(goTopBtn).display != 'none') {
            goTopBtn.style.opacity = 0;
            // goTopBtn.style.display = "none";
            goTopBtn.setAttribute('doit-etre-affiche', 'false');
            clearTimeout(identifiant_CacherGoTop);  // annuler l'action lancée par setTimeout
            // console.log('caché', 'annul.prog', identifiant_CacherGoTop);
        };
    }
};
// window.onscroll = function () {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         goTopBtn.style.display = "block";
//     } else {
//         goTopBtn.style.display = "none";
//     }
// };

// Quand on bouge la souris et le bouton GoTop peut être affiché, on l'affiche
window.addEventListener('mousemove', () => {
    // if (theGoTopButton.matches(':hover')) { // NE MARCHE PAS
    // NE MARCHE PAS: On affiche le bouton GoTop seulement si on bouge la souris au dessus de la zone où il sera affiché
    if (goTopBtn.getAttribute('doit-etre-affiche') == 'true') {
        if (window.getComputedStyle(goTopBtn).opacity == 0) {
            // if (window.getComputedStyle(goTopBtn).display == 'none') {
            goTopBtn.style.opacity = 1;
            // goTopBtn.style.display = "block";
            //clearTimeout(identifiant_CacherGoTop);  // annuler une éventuelle action lancée par setTimeout
            //identifiant_CacherGoTop = setTimeout(() => { goTopBtn.style.opacity = 0; }, dureeAffichage_goTopBtn);
            // console.log('prog.caché (b)');
            //console.log('affiché 2', identifiant_CacherGoTop);
            // Le bouton est affiché pendant une durée (dureeAffichage_goTopBtn ms), ensuite caché si aucun mouvement n'est fait
        } else {
            // Le bouton est déjà affiché, donc, on annule l'action précédente de setTimeout et on crée une nouvelle
            //clearTimeout(identifiant_CacherGoTop);  // annuler l'action lancée précédemment par setTimeout
            //identifiant_CacherGoTop = setTimeout(() => { goTopBtn.style.opacity = 0; }, identifiant_CacherGoTop);
            // console.log('prog.caché (c)');
        }
    };
    // }

    // if (window.getComputedStyle(goTopBtn).display == 'none') {
    //     if (goTopBtn.getAttribute('doit-etre-affiche') == 'true') {
    //         clearTimeout(identifiant_CacherGoTop);  // annuler l'action lancée précédemment par setTimeout
    //         goTopBtn.style.display = "block";
    //         identifiant_CacherGoTop = setTimeout(() => { goTopBtn.style.display = "none"; console.log('prog.caché (b)'); }, 7000);
    //         console.log('affiché 2', identifiant_CacherGoTop);
    //         // Le bouton est affiché pendant une durée (7 s), ensuite caché si aucun mouvement n'est fait
    //         // 7000 (7 s): délai avant disparition
    //     };
});

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    goTopBtn.blur();  // force la perte du focus/hover pour les écrans tactiles
});
// ***************************************** GoTop Button (end)



// ***************************************** Fade (estomper) 
document.addEventListener('DOMContentLoaded', function () {
    const estomperDivs = document.querySelectorAll('.estomper');
    // old: const estomperDivs = document.querySelectorAll('.estomper-bas-50-s-075, .estomper-haut-50-s-075, .estomper-gauche-250-s-075');

    // const lettreParLettreElements = document.querySelectorAll('affichage-lettre-par-lettre');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (aUneClasseCommencantPar(entry.target, 'estomper-gauche')) {
                    entry.target.classList.add('estomper-horizental-fin');
                } else {
                    entry.target.classList.add('estomper-vertical-fin');
                };

                // Lancer l'animation "lettre par lettre" si la classe .animate-text est présente
                if (entry.target.classList.contains('affichage-lettre-par-lettre')) {
                    afficherTexteLettreParLettre(entry.target, 70, false); // false = depuis la gauche
                };

                // Optionally unobserve after the effect is applied
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25 // Adjust as needed (when 25% of the element is visible)
    });

    estomperDivs.forEach(div => {
        observer.observe(div);
    });

    // lettreParLettreElements.forEach(element => { observer.observe(element) });
});

const aUneClasseCommencantPar = (element, prefixe) => {
    // console.log(element.classList);
    return Array.from(element.classList).some(className => className.startsWith(prefixe));
};


// document.addEventListener('DOMContentLoaded', function () {
//     const estomperDivs = document.querySelectorAll('.estomper-div');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('estomper-div-fin');
//                 // Optionally unobserve after the effect is applied
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.25 // Adjust as needed (when 25% of the element is visible)
//     });

//     estomperDivs.forEach(div => {
//         observer.observe(div);
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const estomperInvDivs = document.querySelectorAll('.estomper-div-inv');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('estomper-div-inv-fin');
//                 // Optionally unobserve after the effect is applied
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.25 // Adjust as needed (when 25% of the element is visible)
//     });

//     estomperInvDivs.forEach(div => {
//         observer.observe(div);
//     });
// });

// OLD:
// document.addEventListener('DOMContentLoaded', function () {
//     const estomperDiv = document.getElementById('estomper-div');

//     function checkScroll() {
//         const rect = estomperDiv.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         if (rect.top < windowHeight * 0.75) {
//             estomperDiv.classList.add('estomper-div-fin');
//         }
//     }

//     // Check scroll position on page load and scroll
//     checkScroll();
//     window.addEventListener('scroll', checkScroll);
// });
// ***************************************** Fade (estomper) (end)



// ***************************************** affichage lettre par lettre (début)
function afficherTexteLettreParLettre(element, delay = 100, fromRight = false) {
    const text = element.textContent;
    element.textContent = ""; // On vide le texte

    [...text].forEach((char, i) => {
        // [...] transforme une chaîne de caractères en un tableau de caractères individuels
        const span = document.createElement("span");
        // span.textContent = char;
        span.textContent = char === " " ? "\u00A0" : char;
        span.classList.add("letter");
        if (fromRight) span.style.transform = "translateX(20px)";
        element.appendChild(span);

        setTimeout(() => {
            span.classList.add("show");
        }, i * delay);
    });
};


// function afficherTexteLettreParLettre(selector, delay = 100, fromRight = false) {
//     console.log('selector:', selector);
//     const elements = document.querySelectorAll(selector);

//     elements.forEach(el => {
//         const text = el.textContent;
//         el.textContent = ""; // on vide le texte

//         [...text].forEach((char, i) => {
//             const span = document.createElement("span");
//             span.textContent = char;
//             span.classList.add("letter");
//             if (fromRight) span.style.transform = "translateX(20px)";
//             el.appendChild(span);

//             setTimeout(() => {
//                 span.classList.add("show");
//             }, i * delay);
//         });
//     });
// }

// Animation sur tous les éléments avec la classe .animate-text
// afficherTexteLettreParLettre(".affichage-lettre-par-lettre", 120, false); // false = depuis la gauche
// ***************************************** affichage lettre par lettre (fin)



// ***************************************** Recherche
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('chercherForm');
//     const searchInput = document.getElementById('chercherInput');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting the traditional way

//         const searchTerm = searchInput.value.trim();
//         const ids = searchTerm.split(',').map(id => id.trim());

//         // Remove previous highlights
//         document.querySelectorAll('.un-filtre').forEach(card => card.classList.remove('highlight'));

//         ids.forEach(id => {
//             const targetCard = document.getElementById(id);
//             if (targetCard) {
//                 targetCard.classList.add('highlight');
//                 targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             } else {
//                 console.warn(`La référence ${id} non trouvée.`);
//                 alert(`La référence ${id} non trouvée.`);
//             }
//         });

//         if (ids.length === 0) {
//             alert('Veuillez saisir une référence à chercher.');
//         }
//     });
// });
// ***************************************** Recherche (end)



// ^ ********************************************** effet HALO (début) */

document.querySelectorAll(".effet-halo-lumineux").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const style = window.getComputedStyle(btn);

        // Element.getBoundingClientRect() retourne un objet DOMRect décrivant la position et la taille de l’élément dans la zone d’affichage(viewport).
        // Ces valeurs ne tiennent pas compte du défilement de la page; elles sont relatives à la fenêtre visible (viewport).


        //const paddingLeft = parseFloat(style.paddingLeft);
        //const paddingTop = parseFloat(style.paddingTop);

        // clientX, clientY = coordonnées souris dans la fenêtre
        // rect.left, rect.top = position du bouton dans la fenêtre

        const x = e.clientX - rect.left; // + paddingLeft;
        const y = e.clientY - rect.top; // + paddingTop;

        // console.log('client:', e.clientX, e.clientY);
        // console.log('rect:', rect.left, rect.top);
        // console.log('padding:', paddingLeft, paddingTop);
        // console.log('*** mousemove:', x, y);
        // console.log('--------------');

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    });
});

// document.querySelectorAll(".effet-halo-lumineux").forEach((btn) => {
//     btn.addEventListener("mousemove", (e) => {
//         const rect = btn.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         btn.style.setProperty("--x", `${x}px`);
//         btn.style.setProperty("--y", `${y}px`);
//     });
// });


// document.querySelectorAll(".effet-halo-lumineux").forEach((btn) => {
//     btn.addEventListener("mousemove", (e) => {
//         const x = e.offsetX; // position relative horizontale
//         const y = e.offsetY; // position relative verticale
//         btn.style.setProperty("--x", `${x}px`);
//         btn.style.setProperty("--y", `${y}px`);
//     });
// });

// ^ ********************************************** effet HALO (fin) */



function cacherMenu() {
    // Cacher le menu pour petits écrans.
    // On l'utilise juste pour les liens dans la même page; pour ceux externes une autre page est chargée (donc le menu sera caché)
    document.getElementById("navbarExample").classList.toggle('show');
};
