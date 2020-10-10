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
?>

<h3>Something</h3>

<?php
while ($row = mysqli_fetch_array($result)) {
 echo $row['bbqDate'] . ' ' . $row['fantasyWeek'] . ' ' . $row['hostName'] . ' ' . $row['hostTeam'] . '<br />';
}

mysqli_close($conn);
?>
<button type="button" onclick="prompt('What is your name?')">Sign up</button>

<form action="insert.php" method="post" onsubmit="setTimeout(function () { window.location.reload(); }, 30)">
    <input type="hidden" id="bbqDayId" name="bbqDayId" value="5"/>
    <p>
        <label for="hostName">Host Name:</label>
        <input type="text" name="hostName" id="hostName">
    </p>
    <p>
        <label for="hostTeam">Host Team:</label>
        <input type="text" name="hostTeam" id="hostTeam">
    </p>
    <input type="submit" value="Submit">
</form>
</body>
</html>