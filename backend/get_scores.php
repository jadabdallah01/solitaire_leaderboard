<?php
require "connect.php";
$result = $conn->query("SELECT player_name, score, duration_seconds FROM scores ORDER BY score DESC LIMIT 20");
$scores = [];
while ($row=$result->fetch_assoc()) {
    $scores[] = $row;
}
echo json_encode($scores);
?>