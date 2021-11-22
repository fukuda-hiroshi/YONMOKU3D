<?php
$player1 = $_POST['player1'];
$player2 = $_POST['player2'];
// echo 'player1='.$player1."<br>";
// echo 'player2='.$player2."<br>";

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>yonmoku｜yonmoku 3D</title>
		<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <!-- <script src="./js/lib/three.min.js"></script> -->
		<script src="https://unpkg.com/three@0.131.3/build/three.min.js"></script>
		<script src="./js/lib/OBJLoader.js"></script>
		<script src="./js/lib/MTLLoader.js"></script>
		<script src="https://unpkg.com/three@0.131.3/examples/js/controls/OrbitControls.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script><!-- jQuery本体読み込み -->
		<script type="module" src="./js/viewer.js"></script>
		<link rel="stylesheet" href="./css/common/destyle.css">
		<link rel="stylesheet" href="./css/index.css">
	</head>
  
	<body>
		<div id="playner">
			<?php echo $player1 ?><br>
			<?php echo $player2 ?><br>
		</div>
		<div id="position">
			上からの図面<br>
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span><br>
			<span>5</span>
			<span>6</span>
			<span>7</span>
			<span>8</span><br>
			<span>9</span>
			<span>10</span>
			<span>11</span>
			<span>12</span><br>
			<span>13</span>
			<span>14</span>
			<span>15</span>
			<span>16</span><br>
		</div>
		<div id="scene"></div>
	</body>

</html>