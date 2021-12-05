<?php
    ob_start();
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require $_SERVER['DOCUMENT_ROOT'] . '/mail/Exception.php';
    require $_SERVER['DOCUMENT_ROOT'] . '/mail/PHPMailer.php';
    require $_SERVER['DOCUMENT_ROOT'] . '/mail/SMTP.php';
    
    $nombre = $_POST['nombre'];
    $msj = $_POST['msj'];
    $mail = $_POST['email'];
    
    $mensaje = "Nombre: $nombre .  <br />";
    $mensaje .= "Su e-mail es: $mail <br />";
    $mensaje .= "Asunto: Consulta desde Web <br />";
    $mensaje .= "Mensaje enviado: $msj <br />";
    $mensaje .= "Enviado el: " . date('d/m/Y', time());

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
    $mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
    $mail->Port = 587; // TLS only
    $mail->SMTPSecure = 'tls'; // ssl is deprecated
    $mail->SMTPAuth = true;
    $mail->Username = 'testvn00@gmail.com'; // email
    $mail->Password = ''; // password
    $mail->setFrom('testvn00@gmail.com', 'Web Compania de Macetas'); // From email and name
    $mail->addAddress('testvn00@gmail.com', 'Web Compania de Macetas'); // to email and name
    $mail->Subject = "Consulta Web - Compania de Macetas";
    $mail->msgHTML($mensaje); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
    $mail->AltBody = 'HTML messaging not supported'; // If html emails is not supported by the receiver, show this body
    // $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file
    $mail->SMTPOptions = array(
                        'ssl' => array(
                            'verify_peer' => false,
                            'verify_peer_name' => false,
                            'allow_self_signed' => true
                        )
                    );
    
    if(!$mail->send()){
        echo "Mailer Error: " . $mail->ErrorInfo;
    }else{
        header("Location:sentForm.html");
    }
    ob_end_flush();
?>