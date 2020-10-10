<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$servername = "localhost";
$database = "u379769495_bbq";
$username = "u379769495_root";
$password = "USMC44eva";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$bbqDayId = $_REQUEST['bbqDayId'];
$hostName = mysqli_real_escape_string($conn, $_REQUEST['hostName']);
$hostTeam = mysqli_real_escape_string($conn, $_REQUEST['hostTeam']);

// Attempt insert query execution
$sql = "UPDATE bbq_day SET hostName= $hostName, hostTeam = $hostTeam WHERE bbqDayId= $bbqDayId";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>