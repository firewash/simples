<?php
class Activity{
    public $code;
    public $startTime;
    public $endTime;

    function __construct($code, $startTime, $endTime){
        $this->code = $code;
        $this->startTime = $startTime;
        $this->endTime = $endTime;
    }
}

$configArr = array(
    new Activity('tmall_prize','2014-10-13 00:00:00','2014-11-11 23:59:59'),
    new Activity('gift_money','2014-10-13 00:00:00','2014-11-11 23:59:59')
);

date_default_timezone_set("prc");
$now = time();
$actList = array();
for($i=0; $i < count($configArr); $i++){
    $act = $configArr[$i];
    $start = strtotime($act->startTime);
    $end = strtotime($act->endTime);

    if($now > $start && $now < $end){
        array_push($actList, $act);
    }
}

$result = array("intervalSeconds" => 3600, "activityList" => $actList);
echo json_encode($result);
?>