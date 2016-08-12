<?php
    header('Content-Type: application/json; charset=utf-8');
    $type = $_SERVER['REQUEST_METHOD'];
    if($type == 'GET'){
    	$json = '[{name:"lee",age:23},{name:"wu",age:42},{name:"yun",age:12}]';
      echo json_encode($json);
    }elseif($type == 'POST'){
    	 //不能通过$_POST获取。因为$_POST['paramName'] 只能接收Content-Type: application/x-www-form-urlencoded提交的数据  
    $man = json_decode(file_get_contents("php://input")); 
    $ff = file_get_contents("php://input");
    echo json_encode($ff); 
    }
   
?>