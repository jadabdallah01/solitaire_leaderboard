<?php
$conn= new mysqli("localhost","root","","solitaire_app");
if ($conn->connect_error) {
    echo json_encode(["Error"=>"Connection failed:" . $conn->connect_error]);
    exit;
}
header('Content-Type: application/json');
?>