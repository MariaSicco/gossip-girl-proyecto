// Inicializar el mapa en Nueva York
var map = L.map('map').setView([40.7831, -73.9712], 13); // Coordenadas de Nueva York

// Añadir capa de mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lugares icónicos donde se grabó Gossip Girl
var lugares = [
    {
        name: "The Met Steps (The Metropolitan Museum of Art)",
        coords: [40.7794, -73.9632],
        description: "Las famosas escaleras del Met, donde Blair y su séquito se reunían."
    },
    {
        name: "The Empire Hotel",
        coords: [40.7713, -73.9822],
        description: "El hotel de Chuck Bass en el Upper West Side."
    },
    {
        name: "Grand Central Terminal",
        coords: [40.7527, -73.9772],
        description: "Donde Serena fue vista por primera vez al regresar a Nueva York."
    },
    {
        name: "Constance Billard School (The Museum of the City of New York)",
        coords: [40.7925, -73.9519],
        description: "La escuela ficticia de Serena y Blair, filmada aquí."
    },
    {
        name: "The Palace Hotel",
        coords: [40.7587, -73.9763],
        description: "El hogar de Serena y su familia durante la primera temporada."
    },
    {
        name: "Bethesda Terrace (Central Park)",
        coords: [40.7740, -73.9700],
        description: "Escenario de varios momentos románticos en la serie."
    }
];

// Añadir marcadores al mapa
lugares.forEach(function(lugar) {
    L.marker(lugar.coords).addTo(map)
        .bindPopup("<b>" + lugar.name + "</b><br>" + lugar.description);
});
