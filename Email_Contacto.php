<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "rodrigosousa1228@outlook.com";
    $subject = "Nova Pergunta de $firstName $lastName";
    $body = "Nome: $firstName $lastName\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensagem:\n$message";
    $headers = "From: $email";
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem. Tente novamente mais tarde.";
    }
}
?>