<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


// Настройки вашей почты
$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
$mail->Username   = 'swansergey7@gmail.com'; // Логин на почте
$mail->Password   = 'xawuqnjefaxrabxc'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

$mail->setFrom('swansergey7@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

// Получатель (куда будет отправлят) письма
$mail->addAddress('techno1970s@gmail.com');
$mail->addAddress('swansergey7@gmail.com');


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>

