<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "proyecto";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['name'];
    $apellido = $_POST['lastname'];
    $correo = $_POST['email'];
    $telefono = $_POST['phone'];
    $direccion = $_POST['address'];
    $genero = $_POST['gender'];
    $contrasena = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encriptar la contraseña
    $aceptar_terminos = isset($_POST['terms']) ? 1 : 0;

    $sql = "INSERT INTO usuarios (nombre, apellido, correo, telefono, direccion, genero, contrasena, aceptar_terminos)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";            

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssi", $nombre, $apellido, $correo, $telefono, $direccion, $genero, $contrasena, $aceptar_terminos);

    try {
        if ($stmt->execute()) {
            header("Location: login.html");
            exit();
        }
    } catch (mysqli_sql_exception $e) {
        if ($e->getCode() == 1062) {
            echo "El correo electrónico ya está registrado. Por favor, usa otro.";
        } else {
            echo "Error: " . $e->getMessage();
        }
    }

    $stmt->close();
}

$conn->close();
?>