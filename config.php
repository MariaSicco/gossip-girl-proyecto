<?php
$host = "dpg-d0uqg2e3jp1c738v3q2g-a.oregon-postgres.render.com"; // Tu host desde Render
$port = "5432";
$dbname = "gossipgirl_db"; // Tu base en Render
$user = "gossipgirl_db_user"; // Tu usuario
$password = "uDpcBWZNGpNLfm6eAciNG4jU8hi199sA"; // Copiá tu contraseña real de Render

$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";

try {
    $conn = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    // echo "Conexión exitosa";
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
