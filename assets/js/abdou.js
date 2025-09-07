// ***************************************** GoTop Button
// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
// ***************************************** GoTop Button (end)


// ***************************************** Fade (estomper) 
document.addEventListener('DOMContentLoaded', function () {
    const estomperDivs = document.querySelectorAll('.estomper-bas-50-s-075, .estomper-haut-50-s-075, .estomper-gauche-250-s-075');

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
        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingTop = parseFloat(style.paddingTop);

        const x = e.clientX - rect.left + paddingLeft;
        const y = e.clientY - rect.top + paddingTop;

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
