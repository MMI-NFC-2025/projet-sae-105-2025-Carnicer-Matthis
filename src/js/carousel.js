// Carrousel pour la frise chronologique
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--next');
    const prevButton = document.querySelector('.carousel__button--prev');
    const indicators = Array.from(document.querySelectorAll('.carousel__indicator'));

    let currentSlide = 0;

    // Fonction pour aller à une slide spécifique
    function goToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;

        // Mettre à jour les indicateurs
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('carousel__indicator--active');
            } else {
                indicator.classList.remove('carousel__indicator--active');
            }
        });
    }

    // Bouton suivant
    nextButton.addEventListener('click', function () {
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0); // Retour au début
        }
    });

    // Bouton précédent
    prevButton.addEventListener('click', function () {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(slides.length - 1); // Aller à la fin
        }
    });

    // Indicateurs cliquables
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            goToSlide(index);
        });
    });
});
