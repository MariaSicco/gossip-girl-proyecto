document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos del modal de episodios
    const episodeBox = document.getElementById("episode-box");
    const episodeModal = document.getElementById("episodeModal");
    const closeEpisodeModal = document.querySelector("#episodeModal .close");

    // Mostrar el modal de episodios
    episodeBox.addEventListener("click", function() {
        episodeModal.classList.add("show");
    });

    // Ocultar el modal de episodios
    closeEpisodeModal.addEventListener("click", function() {
        episodeModal.classList.remove("show");
    });

    // Cerrar el modal de episodios al hacer clic fuera del contenido
    window.addEventListener("click", function(event) {
        if (event.target === episodeModal) {
            episodeModal.classList.remove("show");
        }
    });

    // Obtener los elementos del modal de momentos especiales
    const specialMomentsBox = document.getElementById("special-moments-box");
    const specialMomentsModal = document.getElementById("specialMomentsModal");
    const closeSpecialMomentsModal = document.querySelector(".close-special-moments");

    // Mostrar el modal de momentos especiales
    specialMomentsBox.addEventListener("click", function() {
        specialMomentsModal.classList.add("show");
    });

    // Ocultar el modal de momentos especiales
    closeSpecialMomentsModal.addEventListener("click", function() {
        specialMomentsModal.classList.remove("show");
    });

    // Cerrar el modal de momentos especiales al hacer clic fuera del contenido
    window.addEventListener("click", function(event) {
        if (event.target === specialMomentsModal) {
            specialMomentsModal.classList.remove("show");
        }
    });
});

//temporada 2
document.addEventListener("DOMContentLoaded", function() {
    // Temporada 2 - Modal de Episodios
    const episodeBox2 = document.getElementById("episode-box-2");
    const episodeModal2 = document.getElementById("episodeModal-2");
    const closeEpisodeModal2 = document.querySelector(".close-episode-modal-2");

    episodeBox2.addEventListener("click", function() {
        episodeModal2.classList.add("show");
    });

    closeEpisodeModal2.addEventListener("click", function() {
        episodeModal2.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === episodeModal2) {
            episodeModal2.classList.remove("show");
        }
    });

    // Temporada 2 - Modal de Momentos Especiales
    const specialMomentsBox2 = document.getElementById("special-moments-box-2");
    const specialMomentsModal2 = document.getElementById("specialMomentsModal-2");
    const closeSpecialMomentsModal2 = document.querySelector(".close-special-moments-2");

    specialMomentsBox2.addEventListener("click", function() {
        specialMomentsModal2.classList.add("show");
    });

    closeSpecialMomentsModal2.addEventListener("click", function() {
        specialMomentsModal2.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === specialMomentsModal2) {
            specialMomentsModal2.classList.remove("show");
        }
    });
});
//temporada 3
document.addEventListener("DOMContentLoaded", function() {
    // Temporada 2 - Modal de Episodios
    const episodeBox3 = document.getElementById("episode-box-3");
    const episodeModal3 = document.getElementById("episodeModal-3");
    const closeEpisodeModal3 = document.querySelector(".close-episode-modal-3");

    episodeBox3.addEventListener("click", function() {
        episodeModal3.classList.add("show");
    });

    closeEpisodeModal3.addEventListener("click", function() {
        episodeModal3.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === episodeModal3) {
            episodeModal3.classList.remove("show");
        }
    });

    // Temporada 2 - Modal de Momentos Especiales
    const specialMomentsBox3 = document.getElementById("special-moments-box-3");
    const specialMomentsModal3 = document.getElementById("specialMomentsModal-3");
    const closeSpecialMomentsModal3 = document.querySelector(".close-special-moments-3");

    specialMomentsBox3.addEventListener("click", function() {
        specialMomentsModal3.classList.add("show");
    });

    closeSpecialMomentsModal3.addEventListener("click", function() {
        specialMomentsModal3.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === specialMomentsModal3) {
            specialMomentsModal3.classList.remove("show");
        }
    });
});
//temporada 4
document.addEventListener("DOMContentLoaded", function() {
    // Temporada 2 - Modal de Episodios
    const episodeBox4 = document.getElementById("episode-box-4");
    const episodeModal4 = document.getElementById("episodeModal-4");
    const closeEpisodeModal4 = document.querySelector(".close-episode-modal-4");

    episodeBox4.addEventListener("click", function() {
        episodeModal4.classList.add("show");
    });

    closeEpisodeModal4.addEventListener("click", function() {
        episodeModal4.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === episodeModal4) {
            episodeModal4.classList.remove("show");
        }
    });

    // Temporada 2 - Modal de Momentos Especiales
    const specialMomentsBox4 = document.getElementById("special-moments-box-4");
    const specialMomentsModal4 = document.getElementById("specialMomentsModal-4");
    const closeSpecialMomentsModal4 = document.querySelector(".close-special-moments-4");

    specialMomentsBox4.addEventListener("click", function() {
        specialMomentsModal4.classList.add("show");
    });

    closeSpecialMomentsModal4.addEventListener("click", function() {
        specialMomentsModal4.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === specialMomentsModal4) {
            specialMomentsModal4.classList.remove("show");
        }
    });
});

//temporada 5
document.addEventListener("DOMContentLoaded", function() {
    // Temporada 2 - Modal de Episodios
    const episodeBox5 = document.getElementById("episode-box-5");
    const episodeModal5 = document.getElementById("episodeModal-5");
    const closeEpisodeModal5 = document.querySelector(".close-episode-modal-5");

    episodeBox5.addEventListener("click", function() {
        episodeModal5.classList.add("show");
    });

    closeEpisodeModal5.addEventListener("click", function() {
        episodeModal5.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === episodeModal5) {
            episodeModal5.classList.remove("show");
        }
    });

    // Temporada 2 - Modal de Momentos Especiales
    const specialMomentsBox5 = document.getElementById("special-moments-box-5");
    const specialMomentsModal5 = document.getElementById("specialMomentsModal-5");
    const closeSpecialMomentsModal5 = document.querySelector(".close-special-moments-5");

    specialMomentsBox5.addEventListener("click", function() {
        specialMomentsModal5.classList.add("show");
    });

    closeSpecialMomentsModal5.addEventListener("click", function() {
        specialMomentsModal5.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === specialMomentsModal5) {
            specialMomentsModal5.classList.remove("show");
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Obtener los botones de la línea del tiempo
    const seasonDots = document.querySelectorAll(".season-dot");

    // Función para ocultar todas las temporadas y mostrar la seleccionada
    function showSeason(seasonNumber) {
        const seasons = document.querySelectorAll(".season-summary");

        // Ocultar todas las temporadas
        seasons.forEach(function(season) {
            season.classList.add("hidden");
        });

        // Mostrar la temporada seleccionada
        const selectedSeason = document.getElementById("season-" + seasonNumber);
        selectedSeason.classList.remove("hidden");
    }

    // Añadir el evento de clic a cada botón de la línea del tiempo
    seasonDots.forEach(function(dot) {
        dot.addEventListener("click", function() {
            const seasonNumber = this.getAttribute("data-season");
            showSeason(seasonNumber); // Llamar a la función para mostrar la temporada
        });
    });
});
