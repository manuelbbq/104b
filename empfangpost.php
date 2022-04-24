<!doctype html>
<html lang=de>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h2>POST Empfang</h2><h1>
    <?php
    echo'Hallo ' . $_POST['fname'] . ' ' . $_POST['lname'] . ' du stinkst und dein Passwort ist '. $_POST['pass'] ;
    ?>
</h1>
<?php
echo"POST Variablen";
echo'<pre>';
print_r($_POST);
echo'</pre>';
echo"GET Variablen";
echo'<pre>';
print_r($_GET);
echo'</pre>';

?>
</body>
</html>

















