<?php
require "connect.php";
$data= json_decode(file_get_contents('php://input'), true);
$name= trim($data['player_name'] ?? '');
if ($name===""){
    http_response_code(400);
    echo json_encode(["Error"=>"Player name is required"]);
    exit;
}
$score = rand (100,5000);
$duration = rand(30,600);
$stmt= $conn->prepare("INSERT INTO scores (player_name, score, duration_seconds) VALUES (?, ?, ?)");
$stmt->bind_param("sii",$name,$score,$duration);
$stmt->execute();
echo json_encode(["Success"=>"Score added","player_name"=>$name,"score"=>$score,"duration_seconds"=>$duration]);
?>