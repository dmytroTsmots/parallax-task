window.addEventListener('scroll', function (e) {
  	var $parallax = document.getElementById('parallax');
  	var posY = document.body.scrollTop * 0.3;
  	$parallax.style.backgroundPosition = '0px ' + (-300 + posY) +'px';
	var $parallax2 = document.getElementById('parallax1');
  	var posY = document.body.scrollTop * 0.3;
  	$parallax2.style.backgroundPosition = '0px '+ (-400 + posY) +'px';
	})