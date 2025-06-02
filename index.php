<?php
session_start();
require 'config.php'; // Conexión a la base de datos
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gossip Girl XOXO</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>
<body>
    <header class="header">
        <div class="header-logo">
            <h1 id="ban1">gossip <br>girl</h1>
            <img id="xoban" src="./img/ban1.png" alt="">
        </div>
        <nav class="nav-menu">
            <ul id="nav-menu">
                <li class="menuli"><a href="./index.php">INICIO</a></li>
                <li class="menuli"><a href="./personajes.html">PERSONAJES</a></li>
                <li class="menuli"><a href="./episodios.html">EPISODIOS</a></li>
                <li class="menuli"><a href="galeria.html">GALERÍA</a></li>
                <li class="menuli"><a href="./mapa.html">MAPA</a></li>
            </ul>
        </nav>
        <div class="loginB">
            <?php if (isset($_SESSION["user_name"])): ?>
                
                <a href="salir.php" id="icon-button">
                    <span class="login"> CERRAR SESIÓN</span>
                    <i class="fas fa-user button-icon"></i>
                </a>
            <?php else: ?>
                <a href="login.html" id="icon-button">
                    <span class="login">INICIA SESIÓN</span>
                    <i class="fas fa-user button-icon"></i>
                </a>
            <?php endif; ?>
        </div>
    </header>
    <div class="double-line"></div>
    
    <main class="main-content">
        <div class="container">
            <img class="banerP" src="./img/bangossip.png" alt="">
            <div class="contenido">
                <h2>contenido</h2>
            </div>
            <section class="content-section">
            <div class="content-box">
                    <img class="contentImg" src="./img/personajes.png" alt="">
                    <h3 class="titlebox" >PERSONAJES</h3>
                    <p>descubre todo acerca de los personajes más icónicos de la serie</p>
                    <br>
                    <a href="personajes.html" class="custom-button">VER MÁS</a>

                </div>
                <div class="content-box">
                    <img class="contentImg" src="./img/episodios.png" alt="">
                    <h3 class="titlebox">EPISODIOS</h3>
                    <p>revive todos los momentos más espectaculares de la serie</p>
                    <br>
                    <a href="episodios.html" class="custom-button">VER MÁS</a>
                </div>
                <div class="content-box">
                    <img class="contentImg" src="./img/gossipgirl.jpg" alt="">
                    <h3 class="titlebox">GALERIA</h3>
                    <p>descubre dónde se grabaron esos momentos tan icónicos con ayuda de este mapa</p>
                    <br>
                    <a href="galeria.html" class="custom-button"> VER MÁS</a>
                </div>
                <div class="content-box">
                    <img class="contentImg"src="./img/mapa.png" alt="">
                    <h3 class="titlebox">UBICACIÓN</h3>
                    <p>descubre dónde se grabaron esos momentos tan icónicos con ayuda de este mapa</p>
                    <br>
                    <a href="mapa.html" class="custom-button">VER MÁS</a>
                </div>
            </section>
            
            <!-- Confesiones del Upper East Side -->
            <?php if (isset($_SESSION["user_name"])): ?>
                <div class="contenido">
                <h2 class="contenido" >Confesiones del upper east side</h2>
                </div>
                <section class="confesiones-section">
                    <h2>Cuentanos tu secreto, nadie lo sabra</h2>
                    <form action="confesiones.php" method="post" class="confesion-form">
                        <textarea name="confesion" placeholder="Escribe tu confesión aquí..." rows="5" required></textarea>
                        <button type="submit" class="custom-button1">Enviar Confesión</button>
                    </form>
                    <h3>confesiones recientes</h3>
                    <div class="confesiones-container">
                    <?php
                        $sql = "SELECT usuario, texto, fecha FROM confesiones ORDER BY fecha DESC LIMIT 5";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<div class='confesion-card'>
                                        <!-- Fecha -->
                                        <span class='confesion-date'>" . date("d M Y, h:i A", strtotime($row["fecha"])) . "</span>
                                        
                                        <!-- Contenido de la confesión -->
                                        <div class='confesion-content'>
                                            <p class='confesion-user'>" . htmlspecialchars($row["usuario"]) . ":</p>
                                            <p class='confesion-text'>" . htmlspecialchars($row["texto"]) . "</p>
                                        </div>
                                    </div>";
                            }
                        } else {
                            echo "<p class='no-confesiones'>No hay confesiones aún. ¡Sé el primero en compartir algo!</p>";
                        }
                        ?>

                    </div>
                </section>  
            <?php endif; ?>
        </div>
    </main>
    <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <img src="./img/XOXO.png" alt="XOXO Logo">
            </div>
            <div class="footer-text">
                <p>Esta es una página de fans no oficial. <em>Gossip Girl</em> es una marca registrada de Warner Bros. y otras compañías. Todos los derechos reservados.</p>
            </div>
            <ul class="footer-links">
                <li><a href="./index.php">Inicio</a></li>
                <li><a href="./personajes.html">Personajes</a></li>
                <li><a href="./episodios.html">Episodios</a></li>
                <li><a href="./galeria.html">Galería</a></li>
                <li><a href="./mapa.html">Mapa</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div class="footer-social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
</body>
</html>
