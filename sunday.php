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

$query = "SELECT * FROM bbq_day";
mysqli_query($conn, $query) or die('Error querying database.');
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);
?>
<html>
<head>
    <title>Brandon Hessler</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="google" content="notranslate">
    <style>

        input.smform {
            font-size: 10px;
            height: 35px;
            line-height: 10px;
        }
        img {
            width: 100%;
            max-width: 100%;
            height: auto;
	        border: 1px solid black;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        iframe {
            width: 100%;
            height: 400px;
	        border: 1px solid black;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .float-container {
            padding: 20px;
        }

        .float-child {
            float: left;
            padding: 20px;
        }
        .calendarDate {
            background-color: #baccfb;
            border: 1px solid white;
            text-align: center;
        }
        .calendar {
            background-color: #00a6ff;
            border: 1px solid white;
            color: white;
            text-align: center;
        }

        @media (max-width: 576px) {
            .float-child {
                width: 50%;
            }
            .calendarDate {
                height: 11em;
                padding: 0;
            }
            .calendar {
                height: 3em;
            }
            .artBg {
                height: 30em;
            }
            form.smform {
                margin: 0;
            }
        }
        @media (min-width: 576px) {
            .float-child {
                width: 20%;
            }
            .calendarDate {
                height: 15em;
            }
            .calendar {
                height: 4em;
            }
            .artBg {
                height: 20em;
            }
        }
        a.center {
            margin: auto;
            color: white;
            width: 100%;
            line-height: 80%;
        }
    </style>
</head>
<body class="is-preload">

<!-- Wrapper -->
<div id="wrapper" class="fade-in">
    <div style="float: right; color: #fff">Version 1.0.3</div>
    <!-- Header -->
    <header id="header">
        <a href="/fantasy.html" class="logo">Fantasy Football</a>
    </header>

    <!-- Nav -->
    <nav id="nav">
        <ul class="links">
            <li><a href="/">Fantasy 2020</a></li>
            <li><a href="fantasy2019.html">Fantasy 2019</a></li>
            <li><a href="fantasy2018.html">Fantasy 2018</a></li>
            <li><a href="fantasy2017.html">Fantasy 2017</a></li>
            <li class="active"><a href="sunday.php">Sunday Sign-up</a></li>
        </ul>
    </nav>

    <!-- Main -->

    <div id="main">
        <article style="padding-bottom: 42em">
            <!-- Featured Post -->
            <article class="post featured">
                <header class="major">
                    <h2>Sunday Shenanigans Sign-up</h2>
                </header>
                <!--<ul class="actions special">-->
                <!--<li><a href="#" class="button large">Full Story</a></li>-->
                <!--</ul>-->
            </article>

            <article class="artBg">
            <?php while ($row = mysqli_fetch_array($result)) {?>
                <div class="float-child calendarDate">
                    <div class="calendar" style="padding-top: 5px">
                        <a class="center"><?php echo $row['fantasyWeek']?>: <?php echo substr($row['bbqDate'], 5)?></a>
                    </div>
                    <?php if (strlen(trim($row['hostName'])) == 0) { ?>
                    <form class="smform" action="insert.php" method="post">
                        <input type="hidden" id="bbqDayId" name="bbqDayId" value="<?php echo $row['bbqDayId']?>"/>
                        <input class="smform" type="text" name="hostName" id="hostName" placeholder="Host Name">
                        <input class="smform" type="text" name="hostTeam" id="hostTeam" placeholder="Host Team">
                        <input class="smform" type="submit" value="Submit">
                    </form>
                    <?php } else { echo $row['hostName'] . ' ' . $row['hostTeam']; }?>
                </div>
            <?php } mysqli_close($conn); ?>
            </article>
        </article>
    </div>

    <!-- Copyright -->
    <div id="copyright">
        <ul><li>Brandon Hessler</li><li>Design: <a href="mailto:website@brandonhessler.com">website@brandonhessler.com</a></li></ul>
    </div>

</div>

<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>
