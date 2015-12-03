<?php 
$uc_url = $_GET['uc_url'];
$renderType = "jsonp";
$from = "ucweb";
$sign = md5("ucweb_etaowuB6ONGRiSD+tL5mw%48uc_1549099") ;
$clientip = "122.225.222.227";

$data = file_get_contents("http://rambo.s.etao.com");
echo $data;
 ?>