<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proyecto";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se recibió una consulta
$query = isset($_POST['query']) ? $_POST['query'] : '';

if (!empty($query)) {
    // Consulta avanzada: buscar por título, episodio o temporada
    $sql = "SELECT titulo, temporada, numero_episodio, fecha_emision, descripcion
            FROM episodios 
            WHERE titulo LIKE ? 
               OR CONCAT('episodio ', numero_episodio, ' temporada ', temporada) LIKE ?";
    $stmt = $conn->prepare($sql);

    $searchTerm = "%$query%";
    $stmt->bind_param("ss", $searchTerm, $searchTerm);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Contenedor principal de resultados con clase
        echo '<ul class="results-list">';
        while ($row = $result->fetch_assoc()) {
            // Cada resultado con sus clases específicas
            echo '<li class="result-item">
                    <h3 class="result-title">' . htmlspecialchars($row['titulo']) . '</h3>
                    <p class="result-info">Temporada: ' . htmlspecialchars($row['temporada']) . '</p>
                    <p class="result-info">Episodio: ' . htmlspecialchars($row['numero_episodio']) . '</p>
                    <p class="result-info">Fecha de emisión: ' . htmlspecialchars($row['fecha_emision']) . '</p>
                    <p class="result-info">Descripcion: ' . htmlspecialchars($row['descripcion']) . '</p>
                </li>';
        }
        echo '</ul>';
    } else {
        // Mensaje para cuando no se encuentran resultados
        echo '<p class="no-results">No se encontraron resultados para la búsqueda: ' . htmlspecialchars($query) . '</p>';
    }

    $stmt->close();
} else {
    // Mensaje para consulta vacía
    echo '<p class="no-results">Por favor, ingresa una consulta.</p>';
}

$conn->close();
?>
