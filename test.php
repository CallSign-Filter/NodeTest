<?php
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
echo "Connected successfully";

?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>

<?php
//Step2
$query = "SELECT * FROM bbq_day";
mysqli_query($conn, $query) or die('Error querying database.');
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);

while ($row = mysqli_fetch_array($result)) {
 echo $row['bbqDate'] . ' ' . $row['fantasyWeek'] . $row['hostName'] . $row['hostTeam']  '<br />';
}

mysqli_close($conn);
?>

</body>
</html>