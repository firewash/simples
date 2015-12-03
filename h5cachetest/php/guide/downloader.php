<?php

//include "../common/date.php";
//include "../library/log4php/2.0.3/Logger.php";

//设置默认时区为北京时间（PRC，中国的英文缩写）
date_default_timezone_set("PRC"); 

// load log4php
/*
Logger::configure('../config/log4php.xml');
$deflogger = Logger::getRootLogger();
$logger = Logger::getLogger("data");
$begin_time = getMillisecond();
*/

// default result
$result_code = 200;
$result_msg = 'success';

// 1.获取请求参数
$pid = $_GET['pid'];
$version = $_GET['version'];
$arch = $_GET['arch'];
$os = $_GET['os'];

// 2.生成渠道下载链接
$default_url = 'http://down2.uc.cn/pcbrowser/down.php?id=101&pid=0501';
$channel_url = 'http://down2.uc.cn/pcbrowser/down.php?id=101&pid=' . $pid;

// 3.生成md5文件下载链接
$default_md5_url = 'http://down2.uc.cn/pcbrowser/down.php?id=101&type=md5&pid=0501';
$md5_url = 'http://down2.uc.cn/pcbrowser/down.php?id=101&type=md5&pid=' . $pid;

// 4.返回
$result = (Object) array(
    'code' => $result_code, 
    'msg' => $result_msg, 
    'data' => array(
        'default_pid' => '0501',
        'pid' => htmlspecialchars($pid, ENT_NOQUOTES), 
        'version' => htmlspecialchars($version, ENT_NOQUOTES), 
        'arch' => htmlspecialchars($arch, ENT_NOQUOTES),
        'os' => htmlspecialchars($os, ENT_NOQUOTES), 
        'default_url' => $default_url,
        'channel_url' => $channel_url, 
        'default_md5_url' => $default_md5_url,
        'md5_url' => $md5_url
    )
);

// htmlspecialchars 防止 xss 漏洞
$result = str_replace("\\/", "/", json_encode($result));
echo $result;

// 5.log
/*
$logstr = (Object) array (
    'date' => $begin_time,
    'ms' => getMillisecond() - $begin_time,
    'cla' => '',
    'func' => 'download.php',
    'args' => array('pid' => $pid, 'version' => $version, 'osbits' => $osbits),
    'result' => $result,
    'exception' => '',
    'pv' => 0,
    'qps' => 0
);
*/
//$logger->info(str_replace("\\/", "/",json_encode($logstr)));

?>
