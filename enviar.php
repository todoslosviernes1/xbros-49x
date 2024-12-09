<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $nome=$_POST['nome'];
        $email=$_POST['email'];
        $assunto=$_POST['assunto'];
        $mensagem=$_POST['mensagem'];

    ?>
    <?php
        $to = "todoslosviernes2015@gmail.com";
        $subject = "$assunto";
        $mensagem  = "<strong>Mensagem:</strong> $mensagem";
        // $header .= "Content-type: text/html; charset=iso-8859-1\n"; 
        // $header .= "From: $email\n";

        mail($to, $subject, $mensagem);
        echo "Mensagem enviada com sucesso";
    ?>
</body>
</html>