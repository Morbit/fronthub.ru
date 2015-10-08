<?php
$params='';
    foreach ($_REQUEST['array'] as $key => $param) {
$params[$param["name"]] = $param["value"];
}
$message = "";
$message .= "Имя: ".$params['name']."<br/>";
$message .= "Email: ".$params['email']."<br/>";
$message .= "Сообщение: ".$params['text'];

mail("test@test.ru", "fronthub", $message, ""."Content-type: text/html");
?>

