<?php
	require_once('TwitterAPIExchange.php');
	$settings = array(
		'oauth_access_token' => "900023014695239681-pKx3SQW8DWON8RheKJyagcOIrYs1pSM",
		'oauth_access_token_secret' => "hNnBHECW9FVdEaCw0iGdENSeLYxalZKSUHwQxGJgim9mD",
		'consumer_key' => "2fhluqBiDRzQBLjisZtp8BUt1",
		'consumer_secret' => "09Cv6Z8gUyqdXTUsyPQDXEKFYMgjbYgzXqex91dtyVGUdoGWdy"
	);

	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	$getfield = '?exclude_replies=true?screen_name=FantastecSport';
	$requestMethod = 'GET';

	$twitter = new TwitterAPIExchange($settings);
	$userTweets = $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();
?>

<!doctype html>
<!--[if IE 9]>
<html lang="en" class="ie ie9">
<![endif]-->
<!--[if lt IE 9]>
<html lang="en" class="ie ie-legacy">
<![endif]-->
<html lang="en">
	<head>
		<title>Fantastec</title>
		<meta name="description" content="fantastec sport fan engagement innovating">
		<meta name="keywords" content="fantastec sport fan engagement innovating">
		<link rel="apple-touch-icon" sizes="57x57" href="assets/images/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="assets/images/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="assets/images/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="assets/images/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/images/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="assets/images/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="assets/images/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
		<link rel="manifest" href="js/libs/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="assets/images/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
		
		<!-- viewport -->
		<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- Windows/IE font smoothing -->
		<meta http-equiv="cleartype" content="on">

		<!-- Use latest IE randering engine and switch on chrome Frame if available -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- CSS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:200,500" rel="stylesheet">

		<link rel="stylesheet" href="css/main.css" />

		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<![endif]-->
		<script src='//api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js' charset='utf-8'></script>
	  <script src='https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js'></script>
		<link href='https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css' rel='stylesheet' />
		<script src="js/libs/jquery-3.2.1.min.js"></script>
		<script src="js/libs/jquery.onepage-scroll.min.js"></script>

	</head>
	<body>

		<div id="loading"></div>
		<div id="menuBlockOut" class="hidden"></div>

		<div>
			<button id="main-burger" class="burger">
				<span class="burger__piece"></span>
				<span class="burger__piece"></span>
				<span class="burger__piece"></span>
			</button>

			<nav id="mainNav">
				<a class="nav_link" data-index="1">home</a>
				<a class="nav_link" data-index="2">about</a>
				<a class="nav_link" data-index="3">innovate</a>
				<a class="nav_link" data-index="4">imagine</a>
				<a class="nav_link" data-index="5">work</a>
				<a class="nav_link" data-index="6">contact</a>
			</nav>
		</div>

		<div id="headerShape"></div>

		<div id="scrollerWrapper">
	    <section data-index="1" id="section1" class="page">
	    	<video id="video" autoplay loop src="assets/videos/landingVideo.mp4"></video>
	    	<div id="gfyCatEmbed" style='position:relative; padding-bottom:178%'>
				  <iframe id="gfyCatEmbedIframe" src='https://gfycat.com/ifr/CourteousLinearIbex?referrer=http%3A%2F%2Fembed.ly%2Fcode%3Furl%3Dhttps%253A%252F%252Fgfycat.com%252FCourteousLinearIbex' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen>	
	    		</iframe>
	    	</div>
	    </section>
	    <section data-index="2" id="section2" class="page">
	    	<div class="tint"></div>
	    	<div id="section2Background0" class="backgroundWrapper"></div>
	    	<div id="section2Background1" class="backgroundWrapper"></div>
	    	<div id="section2Background2" class="backgroundWrapper"></div>
	    	<div class="textWrapper">
	    		<h2 class="heading">about us</h2>
	    		<p class="largeText">
		    		Professional sport now enjoys a truly global following. Through technology our Fantastec goal is to enable ever richer more rewarding fan experiences.
	    		</p>
	    		<p>
	    			Only 0.5% of the annual English Premier League audience experience a match from a stadium seat. Yet billions of fans the world over follow the action, the characters and the stories. 
	    		</p>
	    		<p>
	    			Through emerging technologies like A.I, Virtual & Augmented Reality, wearable tech and the Blockchain, Fantastec is developing products, platforms and experiences so globally distanced fans can connect and engage more deeply with the sport they love.
	    		</p>
	    	</div>
	    </section>
	    <section data-index="3" id="section3" class="page">
	    	<div class="tint"></div>
	    	<div id="section3Background0" class="backgroundWrapper"></div>
	    	<div id="section3Background1" class="backgroundWrapper"></div>
	    	<div id="section3Background2" class="backgroundWrapper"></div>
	    	<h2 class="heading standAlone">how we innovate</h2>
	    	<div class="textWrapper center">
	    		<h2 class="heading"><!-- CONTENT GETS INJECTED FROM JS --></h2>
	    		<p><!--CONTENT GETS INJECTED FROM JS --></p>
	    	</div>
	    		
  			<ul class="paginator custom">
		    	<li><a data-index="2" class="section3PaginatorButton"></a></li>
		    	<li><a data-index="1" class="section3PaginatorButton"></a></li>
		    	<li><a data-index="0" class="section3PaginatorButton active"></a></li>
	    	</ul>
	    		
	    </section>
	    <section data-index="4" id="section4" class="page">
	    	<div class="tint"></div>
	    	<div id="section4Background0" class="backgroundWrapper"></div>
	    	<div id="section4Background1" class="backgroundWrapper"></div>
	    	<div id="section4Background2" class="backgroundWrapper"></div>
	    	<div id="section4Background3" class="backgroundWrapper"></div>
	    	<div id="section4Background4" class="backgroundWrapper"></div>
	    	<div id="section4Background5" class="backgroundWrapper"></div>

	    	<div class="textWrapper">
	    		<h2 class="heading"><!-- CONTENT GETS INJECTED FROM JS --></h2>
	    		<p><!--CONTENT GETS INJECTED FROM JS --></p>
	    	</div>

	    	<ul class="paginator custom">
	    		<li><a data-index="5" class="section4PaginatorButton"></a></li>
		    	<li><a data-index="4" class="section4PaginatorButton"></a></li>
	    		<li><a data-index="3" class="section4PaginatorButton"></a></li>
		    	<li><a data-index="2" class="section4PaginatorButton"></a></li>
		    	<li><a data-index="1" class="section4PaginatorButton"></a></li>
		    	<li><a data-index="0" class="section4PaginatorButton active"></a></li>
	    	</ul>
	    </section>
	    <section data-index="5" id="section5" class="page">
	    	<h2 class="heading standAlone">work with us</h2>

	    	<div class="subSection clickable first" id="subSection1">
		    	<div class="tint"></div>
		    	<div id="subSection1Background" class="backgroundWrapper"></div>
		    	<div class="textWrapper center">
		    		<h2 class="heading">inspire</h2>
		    		<p>
		    			Do you have an idea, a vision or an aspiration you believe could revolutionise a sports experience for fans? Can you hook us in 50 words or less?
		    		</p>
		    		<a class="button" href="mailto:hello@fantastec.io">hello</a>
		    	</div>
		    </div>

		    <div class="subSection clickable" id="subSection2">
		    	<div class="tint"></div>
		    	<div id="subSection2Background" class="backgroundWrapper"></div>
		    	<div class="textWrapper center">
		    		<h2 class="heading">partner</h2>
		    		<p>
		    			Are you are an established start-up or small business with a technology or proof of concept that could benefit sports fans?
		    		</p>
		    		<a class="button" href="mailto:hello@fantastec.io">hello</a>
		    </div>
		    	</div>

		    <div class="subSection clickable" id="subSection3">
		    	<div class="tint"></div>
		    	<div id="subSection3Background" class="backgroundWrapper"></div>
		    	<div class="textWrapper center">
		    		<h2 class="heading">Join</h2>
		    		<p>
		    			Are you passionate about technology, sports, creativity and teamwork? We’re looking for people like you.
		    		</p>
		    		<a class="button" href="mailto:hello@fantastec.io">hello</a>
		    	</div>
		    </div>
	    </section>
	    <section data-index="6" id="section6" class="page">
	    	<div class="tint"></div>
	    	<div id="section6Background" class="backgroundWrapper" style="width: 100vw; height: 100vh;"></div>
	    </section>
	  </div>
	  <div id="footer">
	  	<p> 
	  		<?php $tweetWithHashtags = preg_replace('/(^|\s)#(\w*[a-zA-Z_]+\w*)/', '\1#<a class="greenText" href="https://twitter.com/search?q=%23\2">\2</a>', json_decode($userTweets)[0] -> text); ?>
	  		<?php $item = explode(" ", json_decode($userTweets)[0] -> created_at); ?>
		  	@FantastecSport • <?php echo $item[0], ' ', $item[1], ' ', $item[2] ?> <?php print_r($tweetWithHashtags); ?>
	  	</p>
	  	<div class="mediaWrapper">
	  		<a class="twitter" href="https://twitter.com/FantastecSport"></a>
	  		<a class="instagram" href="https://www.instagram.com/fantastecsport"></a>
	  		<a class="linkedIn" href="https://www.linkedin.com/company/fantastecsport"></a>
	  	</div>
	  </div>
	  <div id="downArrow" class="arrow"></div>

	  <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-106172674-1', 'auto');
		  ga('send', 'pageview');

		</script>

		<script>
				mapboxgl.accessToken = 'pk.eyJ1IjoibXJhd2Vzb21lIiwiYSI6ImNqMzJzeDN4ZjAwMHAyd250YmRyZm04MDcifQ.YcsqDP3hqulR3f523AoB1g';

				var bounds = [
				    [-74.08633022449791, 40.67099989314178], 
				    [-73.7202743886315, 40.893309881421345] 
				];

				var map = new mapboxgl.Map({
					container: 'section6Background',
					center: [-0.611835206780952, 51.24045782724647],
					zoom: 16.5,
					pitch: 65,
    			bearing: 15,
					style: 'mapbox://styles/mrawesome/cj7hm5d2w4lkm2rp9t5z6ikv3',
					interactive: false
				}).addControl(new mapboxgl.NavigationControl());

				function createMarker() {
			    var el = $('<div><div class="marker"><h3>Fantastec</h3><p>Surrey Technology Centre </br> 40 Occam Road </br>Guildford Surrey </br> GU2 7YG</p><a class="green" href="https://www.google.com/maps/place/Surrey+Research+Park/@51.2396613,-0.6142707,17z/data=!4m5!3m4!1s0x0:0x632d0439c869347!8m2!3d51.2398362!4d-0.6120311">open in google maps</a><p>T: <a href="tel:+44-207-654-321">+44(0)207654321</a></p><p>E: <a href="mailto:hello@fantastec.io">hello@fantastec.io</a></p></div><div class="markerPoint"></div></div>').get(0);

			    new mapboxgl.Marker(el, {offset: [50, 50]})
		        .setLngLat([-0.611500906980952, 51.244910082724647])
		        .addTo(map);
				}
				
				createMarker();

				map.on('load', function() {
			    map.addLayer({
			        'id': '3d-buildings',
			        'source': 'composite',
			        'source-layer': 'building',
			        'filter': ['==', 'extrude', 'true'],
			        'type': 'fill-extrusion',
			        'minzoom': 4,
			        'paint': {
			            'fill-extrusion-color': '#676767',
			            'fill-extrusion-height': {
			                'type': 'identity',
			                'property': 'height'
			            },
			            'fill-extrusion-base': {
			                'type': 'identity',
			                'property': 'min_height'
			            },
			            'fill-extrusion-opacity': 1
			        }
			    });
			});

			</script>
			<script src="js/app.js"> </script>
		<!-- PRODUCTION ENVIRONNEMENT : -->
		<!-- <script src="js/libs/lib.min.js"></script> -->
		<!-- <script src="js/all.min.js"></script> -->
	</body>
</html>
