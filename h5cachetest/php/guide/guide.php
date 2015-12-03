<?php
$version=$_GET["ver"];

if (empty($version) ) {
    header("location: http://pc.uc.cn");
    return;
}
$config = array();
$config["1"] = "http://pc.uc.cn/hello_world/1.0.html";
$config["2"] = "http://pc.uc.cn/hello_world/2.0.html";
$config["3"] = "http://pc.uc.cn/hello_world/3.0.html";
$config["4"] = "http://pc.uc.cn/hello_world/4.0.html";

$tag = substr($version,0,1);
$url = $config[$tag];
if (empty($url) ) {
    header("location: http://pc.uc.cn");
    return;
}
header("location: " . $url);
?>