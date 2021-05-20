<!DOCTYPE html>
<html lang="en">

<?php 

    include('./servicios/db_connect.php');

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">
    <title>Refugio San Nicolás LZ</title>
</head>

<!--=============================== ARCHIVOS CSS ==============================-->

<link rel="stylesheet" href="css/navbar-footer.css">
<link rel="stylesheet" href="css/mascotas-grid.css">

<!--=============================== TIPOGRAFIAS ===============================-->

<link href="https://fonts.googleapis.com/css2?family=Commissioner&display=swap" rel="stylesheet"> <!-- Commissioner -->
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> <!-- Raleway 400 -->

<!--=============================== IMPORTACIONES ===============================-->

<script src="https://kit.fontawesome.com/9ef2b94efc.js" crossorigin="anonymous"></script>

<!--================================== CUERPO =================================-->

<body>

    <!--================================== BARRA DE NAVEGACIÓN =================================-->

    <header>
        <div id="barra_navegacion">
            <nav>
                
                <ul>
                    <li><a id="navbar-brand" href="index.php"><img src="./assets/logo.png" alt=""></a></li>                    
                </ul>
            </nav>
            <nav>
                
                <ul>
                    <li><a href="./servicios/mascotas/nueva_mascota.php">Inst. Mascotas</a></li>
                    <li><a href="index.php">Inicio</a></li>
                    <li><a href="animales.php">Adoptá un animal</a></li>
                    
                    <li>Contactanos<i class="fas fa-angle-down"></i>
                        <ul>
                            <li><a href="contacto_directo.php">Contacto directo</a></li>
                            <li><a href="FAQ.php">Preguntas frecuentes (FAQ)</a></li>
                        </ul>
                    </li>
                    <div>
                        <input type="checkbox" class="checkbox-theme" id="chk">
                        <label class="label" for="chk">
                            <i class="fas fa-sun"></i>
                            <i class="fas fa-moon"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
                </ul>
            </nav>
        </div>
    </header>

    <!--================================= SECCION DE MASCOTAS ================================-->

        <section>
        <h1 style="padding-top: 150px" class="titulo">MASCOTAS RESCATADAS</h1>
        <div class="contenedor_equipo">

        <?php
            $query = "SELECT * FROM `animales`";
            $envio = $conexion->query($query);
            while($row=$envio->fetch_assoc()){

            $id = $row['id_mascota'];
        ?>
            <div class="item_equipo">
                <div class="foto_integrante" style="background-image: url(<?php echo $row['imagen_mascota']?>)"></div>
                <div class="informacion_mascota">
                    <h4 class="nombre_integrante"><?php echo $row['nombre']?></h4>
                    <button id="btn-abrir-popup<?php echo $id?>" class="btn-abrir-popup" onclick="openPopup(<?php echo $id?>)">Ver más</button>
                </div>
            </div> <!-- CERRAR ITEM EQUIPO -->

            <div class="overlay" id="overlay<?php echo $id?>">
                <div class="popup" id="popup<?php echo $id?>">
                    <div class="img" style="background-image: url(<?php echo $row['imagen_mascota']?>)"></div>
                    <div class="container-text">
                        <h1><?php echo $row['nombre']?></h1>
                        <div class="descripcion">
                            <div class="renglon">
                                <h4>Sexo:</h4><p> <?php echo $row['sexo']?></p>
                            </div>
                            <div class="renglon">
                                <h4>Peso:</h4><p> <?php echo $row['peso']?>kg</p>
                            </div>
                            <div class="renglon">
                                <?php 
                                $fecha = $row['fecha_nacimiento'];
                                $fechaInv = str_replace('-', '/', date('d-m-y', strtotime($fecha)));
                                ?>
                                <h4>Nacimiento:</h4><p> <?php echo $fechaInv?></p>
                            </div>
                            <div class="renglon">
                                <h4>Edad:</h4><p> <?php echo $row['edad']?></p>
                            </div>
                            <div class="renglon">
                                <h4>Color:</h4><p> <?php echo $row['color']?></p>
                            </div>
                            <div class="renglon">
                                <h4>Tamaño:</h4><p> <?php echo $row['tamaño']?></p>
                            </div>
                            <div class="renglon">
                                <h4>Raza:</h4><p><?php echo $row['raza']?></p><br>
                            </div>
                            <div class="renglon">
                            </div>
                            <div class="renglon aptitud">
                                <h4>Aptitud: </h4><p> <?php echo $row['aptitud']?></p>
                            </div>
                        </div>
                        <a class="btn-adoptar" href="">Adoptar</a>
                        <a href="#" id="btn-cerrar-popup<?php echo $id?>" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
                    </div>
                </div>
            </div>
        <?php } ?>
        </div>
    </section>  

</html>
    <!--================================== FOOTER =================================-->

    <footer>
        <div class="col-footer">
            <img class="logo-footer" src="./assets/logo.svg" alt="">
            <h1 class="refugio">Refugio San Nicolás</h1>
        </div>
        <hr class="divisor-footer">
        <div class="col-footer">
            <h3>¡Ayudanos a difundir nuestra causa!</h3>
            <div class="redes-footer">
                <div class="fila2-footer">
                    <a class="btn-f facebook" href="https://www.facebook.com/refugiosannicolas" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <h4>Facebook</h4>
                </div>
                <div class="fila2-footer">
                    <a class="btn-f instagram" href="https://www.instagram.com/paula_todo_dulce/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <h4>Instagram</h4>
                </div>
            </div>
        </div>
        <hr class="divisor-footer">
        <div class="col-footer">
            <h3 class="sub-titulo">¿Querés convertirte en voluntario <br> o ayudarnos monetariamente?</h3>
            <div class="redes-footer">
                <div class="fila2-footer">
                    <a class="btn-f voluntario" href="#">
                        <i class="fas fa-user-plus"></i>
                    </a>
                    <h4>Convertite en voluntario</h4>
                </div>
                <div class="fila2-footer">
                    <a class="btn-f donaciones" href="#">
                        <i class="fas fa-money-bill-alt"></i>
                    </a>
                    <h4>Apoyanos monetariamente</h4>
                </div>
            </div>
        </div>
    </footer>

    <!--================================== SCRIPTS =================================-->

    <script src="js/navbar.js"></script>
    <script src="js/dark_mode.js"></script>
    <script src="js/popup.js"></script>
</body>

</html>