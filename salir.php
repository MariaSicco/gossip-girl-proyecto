<?php
session_start();
$_SESSION = [];
session_destroy(); // Destruye todas las variables de sesión
header("Location: index.php"); // Redirige al inicio
exit();
?>