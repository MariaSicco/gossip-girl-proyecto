<?php
session_start();
require 'config.php'; // Incluye la conexión a la base de datos

// Verificar que el usuario esté autenticado
if (!isset($_SESSION["user_name"])) {
    header("Location: login.php");
    exit();
}

// Recoger datos del formulario
$usuario = "Ánonimo";// Nombre del usuario desde la sesión
$confesion = isset($_POST['confesion']) ? trim($_POST['confesion']) : ''; // Validar la existencia del campo

// Validar que la confesión no esté vacía
if (!empty($confesion)) {
    // Preparar la consulta SQL para insertar la confesión
    $stmt = $conn->prepare("INSERT INTO confesiones (usuario, texto) VALUES (?, ?)");
    
    // Verificar si la consulta se preparó correctamente
    if ($stmt === false) {
        die("Error al preparar la consulta: " . $conn->error);
    }

    // Asociar parámetros y ejecutar la consulta
    $stmt->bind_param("ss", $usuario, $confesion);

    if ($stmt->execute()) {
        header("Location: index.php"); // Redirigir al índice después de guardar
        exit();
    } else {
        echo "Error al guardar la confesión: " . $conn->error;
    }

    $stmt->close(); // Cerrar la consulta preparada
} else {
    echo "La confesión no puede estar vacía.";
}

$conn->close(); // Cerrar la conexión a la base de datos
?>
