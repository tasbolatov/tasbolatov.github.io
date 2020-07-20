<?php 

require 'phpmailer/PHPMailerAutoload.php';

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$message = $_POST['user-message'];

$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'aral.divan@mail.ru'; // логин от вашей почты
$mail->Password = 'aSSStana8080'; // пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';

$mail->CharSet = 'UTF-8';
$mail->From = 'aral.divan@mail.ru'; // адрес почты, с которой идет отправка
$mail->FromName = 'aral.divan'; // имя отправителя
$mail->addAddress('aa.tasbolatov@gmail.com', 'Тасболатов Ансаган');
// $mail->addAddress('email2@email.com', 'Имя 2');
$mail->addCC('aa.tasbolatov@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'ARAL.DIVAN';
$mail->Body = "
ПОЛЬЗОВАТЕЛЬ ОСТАВИЛ СВОИ ДАННЫЕ <br>
Имя: " . $name . "<br>
Телефон: " . $phone . "<br>
Сообщение: " . $message . " ";
$mail->AltBody = 'Привет, мир! Это альтернативное письмо';
// $mail->addAttachment('img/Lighthouse.jpg', 'Картинка Маяк.jpg');
// $mail->SMTPDebug = 1;

if( $mail->send() ){
	echo 'Письмо отправлено';
}else{
	echo 'Письмо не может быть отправлено. ';
	echo 'Ошибка: ' . $mail->ErrorInfo;
}

?>