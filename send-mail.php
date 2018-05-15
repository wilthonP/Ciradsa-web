<?php

$nombres = $_POST['nombre-c'];
$telefono = $_POST['telefono-c'];
$correo = $_POST['correo-c'];
$mensaje = $_POST['mensaje-c'];

$to = "wilthon-pena95@hotmail.com";
$subject = "Contacto Ciradsa";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "From: Contacto <".$correo.">" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
$message = "
<html>
<head>
<title>Mensaje de Consulta</title>
</head>
<body>
<h5>De: ".$nombres."</h5>
<p>Telefono: ".$telefono."</p>
<p>E-mail: ".$correo."</p>
<p>".$mensaje."</p>
</body>
</html>";

$mensaje = wordwrap($mensaje, 70, "\r\n");
 
mail($to, $subject, $message, $headers);

header('Location: index.php');