

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // Cambia las imágenes cada 3 segundos

window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
/// Mostrar descripción del personaje en el modal
function mostrarDescripcion(personaje) {
    var descripcionContent = document.getElementById("descripcion-content");
    var modal = document.getElementById("descripcion-modal");
    
    // Descripciones detalladas para cada personaje
    var descripciones = {
        'serena': `
            <aside role="region" class="portable-infobox">
                <h2 class="pi-item pi-title pi-secondary-background">Serena van der Woodsen</h2>
                <figure class="pi-item pi-image">
                    <img src="https://static.wikia.nocookie.net/gossipgirl/images/a/a7/SerenaInfobox.jpg" alt="Serena Infobox">
                </figure>
                <section class="pi-item pi-group pi-border-color">
                    <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                        <div class="pi-data-value">Blake Lively</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Descripción:</b></h3>
                        <div class="pi-data-value">Serena es el alma libre y socialité de la serie, conocida por su belleza y su carisma. Su regreso a Nueva York marca el inicio de los eventos de la serie.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                        <div class="pi-data-value">Espontánea, encantadora, algo irresponsable, pero con buen corazón. Tiende a huir de sus problemas.</div>
                        </div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                        <div class="pi-data-value">Tiene una relación intermitente con Dan Humphrey. Es la mejor amiga de Blair Waldorf, aunque su amistad es complicada.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Familia:</b></h3>
                        <div class="pi-data-value"> Hija de Lily van der Woodsen y hermana de Eric van der Woodsen.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                        <div class="pi-data-value">Serena lucha constantemente entre su deseo de independencia y las expectativas sociales impuestas por su familia y el Upper East Side.</div>
                    </div>

                </section>
                <!-- Carrusel de imágenes -->
                <div class="carousel-personaje">
                    <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                    <div class="carousel-controls">
                        <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                        <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                    </div>
                </div>
                
            </aside>
        `,
        'blair': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Blair Waldorf</h2>
            <figure class="pi-item pi-image">
                <img src="https://i.pinimg.com/736x/c6/11/0a/c6110a31f345e17b0e4e913084ae05b3.jpg" alt="Blair Waldorf Imagen 1">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Leighton Meester</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Blair es la reina del Upper East Side, conocida por su estilo refinado y su ambición. Es la mejor amiga de Serena y suele tener problemas con su inseguridad.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Inteligente, manipuladora, perfeccionista y leal a sus amigos cercanos. Sueña con una vida de poder y glamour.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Tiene una relación compleja con Chuck Bass, además de romances con Nate Archibald y otros personajes.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hija de Eleanor Waldorf, diseñadora de moda, y Harold Waldorf, su padre, que es homosexual.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Su principal ambición es tener éxito en el mundo de la moda y el poder, luchando por equilibrar sus deseos personales con su vida social.</div>
                </div>
            </section>
            <!-- Carrusel de imágenes -->
            <div class="carousel-personaje">
                <img id="carousel-image" src="https://i.pinimg.com/736x/c6/11/0a/c6110a31f345e17b0e4e913084ae05b3.jpg" alt="Blair Waldorf Imagen 2">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </div>
        </aside>

        `,
        'chuck': `
        <aside role="region" class="portable-infobox">
        <h2 class="pi-item pi-title pi-secondary-background">Serena van der Woodsen</h2>
        <figure class="pi-item pi-image">
            <img src="https://static.wikia.nocookie.net/gossipgirl/images/a/a7/SerenaInfobox.jpg" alt="Serena Infobox">
        </figure>
        <section class="pi-item pi-group pi-border-color">
            <h2 class="pi-item pi-header">Descripcion Personaje</h2>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                <div class="pi-data-value">Ed Westwick</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Descripción:</b></h3>
                <div class="pi-data-value">Hijo del millonario Bart Bass, Chuck es el heredero del imperio Bass y el chico malo del Upper East Side. Es conocido por su conducta rebelde y sus tramas de manipulación.</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                <div class="pi-data-value">Ambicioso, oscuro, carismático y vulnerable. A menudo usa su riqueza y poder para conseguir lo que quiere, pero también tiene un lado emocional que suele ocultar.</div>
                </div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                <div class="pi-data-value">Su relación más importante es con Blair Waldorf, con quien mantiene una relación tormentosa pero apasionada.</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Familia:</b></h3>
                <div class="pi-data-value"> Hijo de Bart Bass y adoptado por Lily van der Woodsen. Su relación con su padre es tensa y complicada.</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                <div class="pi-data-value">Chuck lucha con problemas de abandono y la búsqueda de su identidad, buscando finalmente redimirse a través de su amor por Blair y su éxito empresarial.
                </div>
            </div>

        </section>
        <!-- Carrusel de imágenes -->
        <div class="carousel-personaje">
            <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
            <div class="carousel-controls">
                <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
            </div>
        </div>
        
        `,
        'dan': `
        <aside role="region" class="portable-infobox">
        <h2 class="pi-item pi-title pi-secondary-background"> Dan Humphrey</h2>
        <figure class="pi-item pi-image">
            <img src="https://static.wikia.nocookie.net/gossipgirl/images/a/a7/SerenaInfobox.jpg" alt="Serena Infobox">
        </figure>
        <section class="pi-item pi-group pi-border-color">
            <h2 class="pi-item pi-header">Descripcion Personaje</h2>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                <div class="pi-data-value">Penn Badgley</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Descripción:</b></h3>
                <div class="pi-data-value">Dan es un joven escritor que proviene de Brooklyn, ajeno al estilo de vida de la élite del Upper East Side. Es conocido como "el chico solitario".</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                <div class="pi-data-value">Inteligente, sensible, a veces ingenuo, y moralmente consciente, pero también ambicioso y capaz de tomar decisiones egoístas.
                </div>
                </div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                <div class="pi-data-value">Serena van der Woodsen, Blair Waldorf, Vanessa Abrams, Georgina Sparks.</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Familia:</b></h3>
                <div class="pi-data-value"> Hijo de Rufus Humphrey y Alison Humphrey, hermano de Jenny Humphrey.</div>
            </div>
            <div class="pi-item pi-data">
                <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                <div class="pi-data-value">Dan se esfuerza por hacer un nombre en el mundo de la escritura mientras navega por las complicaciones de sus relaciones románticas. Eventualmente, se revela como el autor anónimo detrás de Gossip Girl, algo que sorprende a todos.
                </div>
            </div>

        </section>
        <!-- Carrusel de imágenes -->
        <div class="carousel-personaje">
            <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
            <div class="carousel-controls">
                <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
            </div>
        </div>
        
        `,
        'nate': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Nate Archibald</h2>
            <figure class="pi-item pi-image">
                <img src="https://i.pinimg.com/736x/6e/62/bc/6e62bc38d7bcfa3f8674eabb9b2b9e71.jpg" alt="Nate Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Chace Crawford</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Nate es el "chico dorado" del Upper East Side, hijo de una familia influyente, aunque constantemente busca su propia identidad fuera de las expectativas familiares.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Agradable, encantador y leal, pero a menudo indeciso sobre lo que realmente quiere en la vida. Nate es un personaje que busca un equilibrio entre la tradición familiar y sus propios deseos.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Blair Waldorf, Serena van der Woodsen, Vanessa Abrams, Juliet Sharp, Diana Payne.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hijo de Howie Archibald y Anne Archibald.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Nate enfrenta problemas financieros y personales mientras intenta liberarse de las expectativas de su familia. Eventualmente, se convierte en editor del periódico "The Spectator".</div>
                </div>
            </section>
            <!-- Carrusel de imágenes -->
            <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </div>
        </aside>
        `,
        'jenny': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Jenny Humphrey</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/4/44/JennyInfobox.jpg" alt="Jenny Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Taylor Momsen</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Jenny es la hermana menor de Dan y una joven ambiciosa que busca ascender en la jerarquía social del Upper East Side.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Creativa, decidida y ambiciosa. Su deseo de encajar la lleva a tomar decisiones cuestionables, pero también muestra su lado vulnerable y soñador.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Nate Archibald, Damien Dalgaard.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hija de Rufus Humphrey y Alison Humphrey, hermana de Dan Humphrey.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Jenny comienza como una chica inocente, pero su deseo por popularidad la transforma. Finalmente, deja Manhattan para comenzar de nuevo después de varios errores.</div>
                </div>
            </section>
            <!-- Carrusel de imágenes -->
            <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </div>
        </aside>
        `,
        'rufus': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Rufus Humphrey</h2>
            <figure class="pi-item pi-image">
            <img src="https://i.pinimg.com/736x/6e/62/bc/6e62bc38d7bcfa3f8674eabb9b2b9e71.jpg" alt="Nate Archibald">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Matthew Settle</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Rufus es un exmúsico de rock y dueño de una galería de arte en Brooklyn. Es un padre devoto y un hombre de principios que constantemente trata de mantener a su familia unida.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Cálido, comprensivo, y protector. Rufus es un hombre sencillo que valora las relaciones familiares por encima de la riqueza y el estatus social. A lo largo de la serie, muestra ser alguien que lucha por hacer lo correcto.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Lily van der Woodsen, Alison Humphrey.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Padre de Dan Humphrey y Jenny Humphrey, exesposo de Alison Humphrey.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Rufus comienza la serie como un hombre alejado del mundo de los ricos, pero su relación con Lily van der Woodsen lo coloca en el centro del drama del Upper East Side. A lo largo de la serie, lucha por equilibrar su vida en Brooklyn con el caos del Upper East Side, manteniendo su integridad y apoyando a sus hijos en sus desafíos personales.</div>
                </div>
            </section>
            <div class="carousel-personaje">
                <img id="carousel-image" src="https://static.wikia.nocookie.net/gossipgirl/images/1/1d/RufusInfobox.jpg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </div>
        </aside>
        `,
        'lily': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Lily van der Woodsen</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/6/64/LilyInfobox.jpg" alt="Lily Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Kelly Rutherford</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Lily es una mujer sofisticada y elegante, miembro destacado de la alta sociedad de Nueva York. A pesar de su vida privilegiada, ha enfrentado múltiples tragedias y decisiones difíciles a lo largo de su vida.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Refinada, protectora y controladora. Lily es una madre amorosa pero distante a veces, con una fuerte tendencia a tomar decisiones drásticas para proteger su estatus y a su familia. A lo largo de la serie, se muestra como una mujer con muchas capas emocionales.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Rufus Humphrey, Bart Bass, William van der Woodsen.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Madre de Serena y Eric van der Woodsen, exesposa de William van der Woodsen y Bart Bass, esposa de Rufus Humphrey.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Lily es una constante figura de la alta sociedad a lo largo de la serie, siempre enfrentando las tensiones entre su familia y su estatus. Se ve envuelta en varios escándalos familiares y decisiones que ponen a prueba su relación con sus hijos, Serena y Eric. Su relación con Rufus Humphrey es clave en su evolución emocional, luchando por equilibrar su vida entre el amor y sus obligaciones sociales.</div>
                </div>
            </section>
            <div class="carousel-personaje">
            <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
            <div class="carousel-controls">
                <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
            </div>
        </div>
        </aside>
        `,
        'eric': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Eric van der Woodsen</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/e/e3/EricInfobox.jpg" alt="Eric Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Connor Paolo</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Eric es el hermano menor de Serena van der Woodsen. A pesar de haber crecido en un ambiente privilegiado, ha pasado por momentos difíciles que lo han hecho más maduro y empático.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Cariñoso, maduro para su edad y comprensivo. Eric es un personaje que, a pesar de los problemas personales que enfrenta, es un apoyo constante para su hermana y amigos. También es una figura conciliadora dentro de su familia.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Elliot (novio), Jonathan Whitney (exnovio).</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hijo de Lily van der Woodsen y William van der Woodsen, hermano menor de Serena van der Woodsen.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Eric comienza la serie luchando con problemas personales como su estancia en un centro de rehabilitación, pero a lo largo del show, se convierte en una figura más estable y confiable. Su relación con su familia, en particular con su hermana Serena, y su orientación sexual juegan papeles importantes en su desarrollo como personaje. Eric eventualmente se aleja del drama del Upper East Side para centrarse en su bienestar y su vida personal.</div>
                </div>
            </section>
            <div class="carousel-personaje">
            <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
            <div class="carousel-controls">
                <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
            </div>
        </aside>
        `,
        'vanesa': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Vanessa Abrams</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/6/66/VanessaInfobox.jpg" alt="Vanessa Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Jessica Szohr</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Vanessa es la amiga de la infancia de Dan Humphrey, una joven cineasta independiente de Brooklyn que siempre ha rechazado el mundo superficial de la élite del Upper East Side.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Idealista, artística y con los pies en la tierra. Vanessa tiene fuertes principios y un sentido de justicia, aunque su moral a veces la lleva a enfrentamientos con aquellos más privilegiados.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Dan Humphrey, Nate Archibald, Scott Rosson.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hija de Gabriela Abrams.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Vanessa empieza como una figura externa al drama del Upper East Side, pero eventualmente se ve envuelta en las intrigas del grupo. Su relación con Dan y Nate la pone en conflicto con el estilo de vida que siempre ha despreciado. Al final, se aleja de Manhattan para centrarse en su carrera como cineasta en el extranjero, distanciándose del caos de la élite.</div>
                </div>
            </section>
            <div class="carousel-personaje">
            <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
            <div class="carousel-controls">
                <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
            </div>
        </aside> 
        `,
        'georgina': `
            <aside role="region" class="portable-infobox">
                <h2 class="pi-item pi-title pi-secondary-background">Georgina Sparks</h2>
                <figure class="pi-item pi-image">
                    <img src="https://static.wikia.nocookie.net/gossipgirl/images/1/19/GeorginaInfobox.jpg" alt="Georgina Infobox">
                </figure>
                <section class="pi-item pi-group pi-border-color">
                    <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                        <div class="pi-data-value">Michelle Trachtenberg</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Descripción:</b></h3>
                        <div class="pi-data-value">Georgina es una manipuladora y problemática mujer que aparece en los momentos más inesperados para crear caos en las vidas de los protagonistas del Upper East Side. Es impredecible y siempre tiene un plan oculto.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                        <div class="pi-data-value">Astuta, manipuladora, y extremadamente impredecible. Aunque a menudo parece amable, su verdadera naturaleza es la de una persona que busca el caos y el drama.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                        <div class="pi-data-value">Dan Humphrey (brevemente), Phillip Becker (esposo).</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Familia:</b></h3>
                        <div class="pi-data-value">Madre de Milo Sparks.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                        <div class="pi-data-value">Georgina llega en varios momentos de la serie para generar conflictos y complicar las vidas de los personajes principales. Desde su falsa relación con Dan hasta su rol como madre de Milo, Georgina siempre está en el centro del drama. Aunque sus motivaciones cambian con el tiempo, sigue siendo una figura impredecible hasta el final de la serie, cuando se asienta con su esposo Phillip, pero nunca pierde su esencia manipuladora.</div>
                    </div>
                </section>
                <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </aside>
    
        `,
        'bart': `
            <aside role="region" class="portable-infobox">
                <h2 class="pi-item pi-title pi-secondary-background">Bart Bass</h2>
                <figure class="pi-item pi-image">
                    <img src="https://static.wikia.nocookie.net/gossipgirl/images/f/fd/BartBassInfobox.jpg" alt="Bart Bass Infobox">
                </figure>
                <section class="pi-item pi-group pi-border-color">
                    <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                        <div class="pi-data-value">Robert John Burke</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Descripción:</b></h3>
                        <div class="pi-data-value">Bart es un poderoso empresario multimillonario, fundador de Bass Industries y padre de Chuck Bass. Su influencia y frialdad lo hacen uno de los personajes más dominantes del Upper East Side.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                        <div class="pi-data-value">Frío, calculador y centrado en los negocios. Bart es una figura imponente que prioriza el poder y el éxito por encima de las relaciones personales, lo que lo distancia de su hijo Chuck.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                        <div class="pi-data-value">Lily van der Woodsen (esposa), Elizabeth Fisher (expareja y madre de Chuck).</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Familia:</b></h3>
                        <div class="pi-data-value">Padre de Chuck Bass, esposo de Lily van der Woodsen.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                        <div class="pi-data-value">Bart es una figura clave en el mundo empresarial, y su relación con su hijo Chuck es complicada. Tras fingir su muerte para protegerse de enemigos, regresa inesperadamente, lo que genera conflictos con Chuck y Lily. Finalmente, Bart muere tras una confrontación con Chuck, marcando un final dramático para su historia y dejando a Chuck como heredero de su imperio empresarial.</div>
                    </div>
                </section>
                <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </aside>
        `,
        'ivy': `
            <aside role="region" class="portable-infobox">
                <h2 class="pi-item pi-title pi-secondary-background">Ivy Dickens</h2>
                <figure class="pi-item pi-image">
                    <img src="https://static.wikia.nocookie.net/gossipgirl/images/8/8f/IvyInfobox.jpg" alt="Ivy Dickens Infobox">
                </figure>
                <section class="pi-item pi-group pi-border-color">
                    <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                        <div class="pi-data-value">Kaylee DeFer</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Descripción:</b></h3>
                        <div class="pi-data-value">Ivy es una actriz que inicialmente es contratada para hacerse pasar por Charlie Rhodes, la prima de Serena, con el objetivo de infiltrarse en la familia van der Woodsen.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                        <div class="pi-data-value">Ambiciosa, manipuladora y determinada a mejorar su situación, aunque a veces muestra remordimientos. Ivy tiene un instinto de supervivencia agudo, pero también ansía aceptación y pertenencia.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                        <div class="pi-data-value">Rufus Humphrey, William van der Woodsen, Max Harding.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Familia:</b></h3>
                        <div class="pi-data-value">No tiene relación familiar con los personajes principales, pero se hace pasar por la prima de Serena, Charlie Rhodes, durante una parte de la serie.</div>
                    </div>
                    <div class="pi-item pi-data">
                        <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                        <div class="pi-data-value">Ivy comienza como una impostora, pero gradualmente se integra en el mundo del Upper East Side. A pesar de las manipulaciones y mentiras que utiliza para asegurar su lugar en la familia van der Woodsen, su vulnerabilidad sale a la luz cuando se enfrenta a las consecuencias de sus acciones. Al final, Ivy se encuentra atrapada entre su deseo de poder y su necesidad de ser aceptada, lo que la lleva a decisiones drásticas, incluyendo su relación con Rufus y su intento de heredar la fortuna de los Rhodes.</div>
                    </div>
                </section>
                <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
            </aside>
        `,
        'dorota': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Dorota Kishlovsky</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/f/f9/DorotaInfobox.jpg" alt="Dorota Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Zuzanna Szadkowski</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Dorota es la leal criada y confidente de Blair Waldorf. Aunque su rol inicial es como empleada, con el tiempo se convierte en una figura maternal y de apoyo emocional para Blair.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Leal, cariñosa, y extremadamente protectora. Dorota tiene un corazón bondadoso y siempre está dispuesta a ayudar a Blair en momentos difíciles, ofreciéndole sabios consejos y apoyo emocional.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Casada con Vanya, el portero del edificio de los Waldorf. Es una figura cercana a Blair Waldorf y su familia.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Esposa de Vanya, madre de Anya.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Dorota empieza como empleada doméstica de los Waldorf, pero a lo largo de la serie se convierte en alguien cercano y de confianza para Blair, ayudándola en sus momentos más críticos. Su relación con Vanya y su papel como madre de Anya muestran un lado más personal de Dorota, manteniendo siempre su lealtad hacia la familia Waldorf. Es una figura importante detrás de escenas, siempre presente en las intrigas del Upper East Side y sirviendo como la voz de la razón en medio del caos.</div>
                </div>
            </section>
            <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
        </aside>
        `,
        'carter': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Carter Baizen</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/e/e7/CarterInfobox.jpg" alt="Carter Baizen Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Sebastian Stan</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Carter es un joven que proviene de la élite del Upper East Side pero ha caído en desgracia debido a su estilo de vida impulsivo y aventurero. Es un hombre libre de espíritu, que viaja sin rumbo y actúa fuera de las normas sociales.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Aventurero, impredecible y carismático. Carter es conocido por su estilo de vida nómada, lo que lo hace intrigante pero poco confiable. Su rebeldía y desapego de las reglas del Upper East Side lo hacen un personaje enigmático.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Serena van der Woodsen, Blair Waldorf (brevemente).</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">No se menciona información familiar relevante en la serie.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Carter aparece en la serie como un personaje que ha renunciado a las expectativas de su estatus social, prefiriendo un estilo de vida errante. Su relación intermitente con Serena y su coqueteo con Blair lo colocan en medio del drama de la élite. Aunque es un personaje problemático, su naturaleza libre y su capacidad para desafiar las normas lo hacen una figura fascinante. A lo largo de la serie, Carter enfrenta problemas financieros y personales debido a su comportamiento impulsivo, pero también muestra un lado más vulnerable y sincero.</div>
                </div>
            </section>
            <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
        </aside>
        `,
        'juliet': `
        <aside role="region" class="portable-infobox">
            <h2 class="pi-item pi-title pi-secondary-background">Juliet Sharp</h2>
            <figure class="pi-item pi-image">
                <img src="https://static.wikia.nocookie.net/gossipgirl/images/f/ff/JulietInfobox.jpg" alt="Juliet Sharp Infobox">
            </figure>
            <section class="pi-item pi-group pi-border-color">
                <h2 class="pi-item pi-header">Descripcion Personaje</h2>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Interpretado por:</b></h3>
                    <div class="pi-data-value">Katie Cassidy</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Descripción:</b></h3>
                    <div class="pi-data-value">Juliet es una joven que llega al Upper East Side con un objetivo secreto de venganza contra Serena van der Woodsen. Trabaja en las sombras, utilizando su astucia y recursos para ejecutar su plan.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Personalidad:</b></h3>
                    <div class="pi-data-value">Manipuladora, decidida y astuta. Juliet es extremadamente calculadora y dispuesta a cualquier cosa para alcanzar sus objetivos. Aunque parece encantadora en la superficie, sus intenciones son siempre estratégicas.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Relaciones:</b></h3>
                    <div class="pi-data-value">Nate Archibald (romántico), Ben Donovan (hermano).</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Familia:</b></h3>
                    <div class="pi-data-value">Hermana de Ben Donovan.</div>
                </div>
                <div class="pi-item pi-data">
                    <h3 class="pi-data-label"><b>Trayectoria:</b></h3>
                    <div class="pi-data-value">Juliet llega a la vida de los protagonistas con el propósito de arruinar la vida de Serena, a quien culpa por la encarcelación de su hermano Ben. Utiliza a Nate Archibald y a otros para manipular situaciones a su favor. A lo largo de su trayectoria en la serie, Juliet orquesta varios escándalos y sabotajes, y aunque al final su plan es frustrado, su capacidad para crear caos deja una marca en los personajes principales del Upper East Side.</div>
                </div>
            </section>
            <div class="carousel-personaje">
                <img id="carousel-image" src="img/serena1.jpeg" alt="Serena Imagen 1">
                <div class="carousel-controls">
                    <button class="prev-slide" onclick="cambiarImagen(-1)">&#10094;</button>
                    <button class="next-slide" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
        </aside>
        `
    };

   // Verifica si existe la descripción del personaje
   if (descripciones[personaje]) {
    descripcionContent.innerHTML = descripciones[personaje]; // Inserta el HTML dinámico
    modal.style.display = "flex"; // Muestra el modal
    document.body.classList.add("modal-open"); // Desactiva scroll en el fondo

    // Actualiza las imágenes del personaje
    if (personajeImagenes[personaje]) {
        images = personajeImagenes[personaje]; // Asigna las imágenes del personaje
        currentImageIndex = 0;
        document.getElementById('carousel-image').src = images[currentImageIndex]; // Muestra la primera imagen
    } else {
        console.error(`No hay imágenes definidas para el personaje: ${personaje}`);
    }
} else {
    console.error(`No hay descripción definida para el personaje: ${personaje}`);
}

    
}

// Cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("descripcion-modal");
    modal.style.display = "none"; // Ocultar el modal al cerrar
    document.body.classList.remove("modal-open"); // Permitir scroll en el fondo
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    var modal = document.getElementById("descripcion-modal");
    var modalContent = document.getElementById("modal-content");

    // Si el usuario hace clic fuera del contenido, cerrar el modal
    if (event.target == modal) {
        cerrarModal(); // Llama a la función de cerrar modal
    }
}
let currentImageIndex = 0;

const personajeImagenes = {
    blair: [
        'https://i.pinimg.com/736x/35/1e/2b/351e2b18b9b6fc4fc1eb4d3b44d9e0b4.jpg',
        'https://i.pinimg.com/736x/c6/11/0a/c6110a31f345e17b0e4e913084ae05b3.jpg',
        'https://i.pinimg.com/736x/3a/61/b7/3a61b74c8e13b3d7fc9808c7091b8db7.jpg',
        'https://i.pinimg.com/736x/15/14/48/151448e22f39c8a2951131e646d2e1e2.jpg'
    ],
    serena: [
        'img/serena2.jpeg',
        'img/serena3.jpeg',
        'img/serena4.jpeg',
        'img/serena5.jpeg'
    ],
    chuck: [
        'img/chuck1.jpeg',
        'img/chuck2.jpeg',
        'img/chuck3.jpeg',
        'img/chuck4.jpeg'
    ],
    // Agrega los demás personajes aquí
};

function cambiarImagen(direction) {
    const imageElement = document.getElementById('carousel-image');
    if (images.length === 0) return; // Si no hay imágenes, no hacer nada

    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    imageElement.src = images[currentImageIndex]; // Cambia la imagen del carrusel
}

