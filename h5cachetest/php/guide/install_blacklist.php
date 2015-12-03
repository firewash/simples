<?php
$version = $_GET["ver"];
$bid = $_GET["bid"];
$pid = $_GET["pid"];

if (empty($version) || empty($bid) || empty($pid)) {
    header("HTTP/1.0 200 OK");
    return;
}

$config = array();
$config["0000&0501"] = "/(\d+)\.(\d+)\.(\d+)\.(\d+)/";


$key_words = $bid . "&" . $pid;
$reg = $config[$key_words];

echo $key_words;
echo "##########";
echo $reg;

if (!empty($reg) && preg_match($reg, $version)) {
	header("HTTP/1.0 403 Forbidden");
	echo "tigge error!";
	return;
}

echo "no way!";


header("HTTP/1.0 200 OK");
?>
