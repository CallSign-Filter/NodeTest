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
 <script>
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 </script>
 <style>
 /* The Modal (background) */
 .modal {
   display: none; /* Hidden by default */
   position: fixed; /* Stay in place */
   z-index: 1; /* Sit on top */
   left: 0;
   top: 0;
   width: 100%; /* Full width */
   height: 100%; /* Full height */
   overflow: auto; /* Enable scroll if needed */
   background-color: rgb(0,0,0); /* Fallback color */
   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
 }

 /* Modal Content/Box */
 .modal-content {
   background-color: #fefefe;
   margin: 15% auto; /* 15% from the top and centered */
   padding: 20px;
   border: 1px solid #888;
   width: 80%; /* Could be more or less, depending on screen size */
 }

 /* The Close Button */
 .close {
   color: #aaa;
   float: right;
   font-size: 28px;
   font-weight: bold;
 }

 .close:hover,
 .close:focus {
   color: black;
   text-decoration: none;
   cursor: pointer;
 }
 </style
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
 echo $row['bbqDate'] . ' ' . $row['fantasyWeek'] . ' ' . $row['hostName'] . ' ' . $row['hostTeam'] . '<br />';
}

mysqli_close($conn);
?>
<button type="button" onclick="prompt('What is your name?')">Sign up</button>
<button id="myBtn">Open Modal</button>
</body>
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
</html>