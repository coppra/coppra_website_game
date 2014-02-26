// JavaScript Document
function initialize() {
  var myLatlng = new google.maps.LatLng(10.055222,76.354688);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
	disableDefaultUI: true,
	//disableDoubleClickZoom: true,
	//draggable: false,
	//scrollwheel: false,
	//navigationControl: false,
	//mapTypeControl: false,
	//scaleControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
google.maps.event.trigger(map, "resize");

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Reach me here'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
//map.checkResize();


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45251456-1', 'coppra.in');
  ga('send', 'pageview');

$("#flick").css("opacity",1);


$(document).ready(function(e) {
	$(".pages#page1").show();
	var docwidth=$(document).width();
	var move = 0;
	$("#flick").fadeOut('2000');
		$(document).mousemove(function(event) {
			if(event.pageX>=2*(docwidth/3) && move < 1){
				$("#ammu").animate({left:"+=98"});
				move++;
			}
			else if(event.pageX<(docwidth/3) && move > -1){
				$("#ammu").animate({left:"-=98"})
				move--;
			}
			else if((event.pageX>=(docwidth/3)) && (event.pageX<=2*(docwidth/3)) && (move==1 || move==-1)){
				$("#ammu").animate({left:($(window).width()/2)-49});
				move = 0;
			}
		//	$("#logo").css("margin-left",(event.pageX));
		//	$("#logo").css("margin-top",(event.pageY ));
			
        });
		
		$("body").keydown(function(e) {
			if(e.keyCode == 37 && move > -1) {
				move--;
				$("#ammu").animate({left:"-=98"});
			}
			if(e.keyCode == 39 && move < 1) {
				move++;
				$("#ammu").animate({left:"+=98"});
			}
			if(e.keyCode == 32) {
				$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			}
		});
		$(".mn#home-mn").click(function(){
			$("#poster1").delay(0).fadeOut(600);
			$("#webpage").delay(0).fadeOut(600);
			$("#software").fadeOut(600);
			if($(document).width()>1024) {
				$("#logo").delay(1400).animate({left:($(document).width()/2),height:"300",width:"300"},400);
				$("#menu").delay(600).animate({bottom:"20"},800);
			}
			else {
				$("#logo").delay(1400).fadeIn(400);
				$("#menu").delay(600).animate({bottom:"20"},800);
			}
			$("#ammu").delay(600).fadeIn(400);
			$("#bg-anim").delay(600).fadeIn(400);
			$("#weare").fadeOut(400);
			$("#findus").fadeOut(400);
		});
		$(".mn#game-mn").click(function(){
			$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			$("#ammu").delay(600).fadeOut(400);
			$("#bg-anim").delay(600).fadeOut(400);
			if($(document).width()>1024) {
				$("#logo").delay(600).animate({left:"200",height:"120",width:"120"},400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-120},800);
			}
			else {
				$("#logo").delay(600).fadeOut(400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-80},800);
			}
			$("#webpage").delay(0).fadeOut(1000);
			$("#poster1").delay(1400).fadeIn(1000);
			$("#software").fadeOut(400);
			$("#weare").fadeOut(400);
			$("#findus").fadeOut(400);
		});
		$(".mn#web-mn").click(function(){
			$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			$("#ammu").delay(600).fadeOut(400);
			$("#bg-anim").delay(600).fadeOut(400);
			if($(document).width()>1024) {
				$("#logo").delay(600).animate({left:"200",height:"120",width:"120"},400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-120},800);
			}
			else {
				$("#logo").delay(600).fadeOut(400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-80},800);
			}
			$("#poster1").delay(0).fadeOut(1000);
			$("#webpage").delay(1400).fadeIn(1000);
			$("#software").fadeOut(400);
			$("#weare").fadeOut(400);
			$("#findus").fadeOut(400);
		});
		$(".mn#software-mn").click(function(){
			$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			$("#ammu").delay(600).fadeOut(400);
			$("#bg-anim").delay(600).fadeOut(400);
			if($(document).width()>1024) {
				$("#logo").delay(600).animate({left:"200",height:"120",width:"120"},400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-120},800);
			}
			else {
				$("#logo").delay(600).fadeOut(400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-80},800);
			}
			$("#poster1").delay(0).fadeOut(1000);
			$("#webpage").fadeOut(400);
			$("#weare").fadeOut(400);
			$("#software").delay(1400).fadeIn(1000);
			$("#findus").fadeOut(400);
		});
		$(".mn#weare-mn").click(function(){
			$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			$("#ammu").delay(600).fadeOut(400);
			$("#bg-anim").delay(600).fadeOut(400);
			if($(document).width()>1024) {
				$("#logo").delay(600).animate({left:"200",height:"120",width:"120"},400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-120},800);
			}
			else {
				$("#logo").delay(600).fadeOut(400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-80},800);
			}
			$("#poster1").delay(0).fadeOut(1000);
			$("#webpage").fadeOut(400);
			$("#software").fadeOut(400);
			$("#findus").fadeOut(400);
			$("#weare").delay(1400).fadeIn(400);	
		});
		$(".mn#findus-mn").click(function(){
			$("#ammu").animate({bottom:"+=100"},200).delay(200).animate({bottom:"-=100"},200);
			$("#ammu").delay(600).fadeOut(400);
			$("#bg-anim").delay(600).fadeOut(400);
			if($(document).width()>1024) {
				$("#logo").delay(600).animate({left:"200",height:"120",width:"120"},400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-120},800);
			}
			else {
				$("#logo").delay(600).fadeOut(400);
				$("#menu").delay(1400).animate({bottom:$(document).height()-80},800);
			}
			$("#poster1").delay(0).fadeOut(1000);
			$("#webpage").fadeOut(400);
			$("#software").fadeOut(400);
			$("#weare").fadeOut(400);
			$("#findus").delay(1400).fadeIn(400);	
		});
		$("#controls").delay(500).fadeIn(200).delay(2000).fadeOut(200);
		

});