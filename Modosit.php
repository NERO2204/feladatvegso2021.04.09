<?php

require './MySqlDB.php';


$mySql = new MySqlDB();



$tablaNeve = "teendo";
$ujErtekek = "allapot='1'";

$id=$_GET['id'];
//parse_str(file_get_contents($adatom));

//echo $adatom;




$mySql->frissit($tablaNeve, $ujErtekek, "id=".$id);



