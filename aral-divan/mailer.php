<?php

if( $_POST){
  
$mail = new PHPMailer;
$mail->isSMTP();

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$message = $_POST['user-message'];

// Настройки
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->CharSet = 'UTF-8';
  $mail->Username = 'assstana80@gmail.com'; // логин от вашей почты
  $mail->Password = 'aSSStana8080'; // пароль от почтового ящика
  $mail->SMTPSecure = 'ssl';
  $mail->Port = '465';
  $mail->From = 'assstana80@gmail.com'; // адрес почты, с которой идет отправка
  $mail->FromName = 'Сообщение с ARAL.DIVAN'; // имя отправителя
  $mail->addAddress('aa.tasbolatov@gmail.com');
 
 // Прикрепление файлов
  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
 
// Письмо
$mail->isHTML(true);
$mail->Subject = "ARAL.DIVAN";
$mail->Body = "
ПОЛЬЗОВАТЕЛЬ ОСТАВИЛ СВОИ ДАННЫЕ <br>
Имя: " . $name . "<br>
Телефон: " . $phone . "<br>
Сообщение: " . $message . " ";

$mail->AltBody = "alternative message";
// $mail->SMTPDebug = 0;

  if( $mail->send() ){
    echo 'Письмо не отправлено! ';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  }else{
    echo 'Письмо успешно отправлено. ';
  }

}

  ?>