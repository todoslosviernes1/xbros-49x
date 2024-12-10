
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
