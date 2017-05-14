$(function() {
	
	setInterval(changeSlides, 3000); //co 3 sek. wykona funk

	var carouselList = $('#carousel ul');	//ten kod wykona się po załadowaniu DOM

	function changeSlides() {
		carouselList.animate({'marginLeft':-550}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last")
	
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	};
	changeSlides();
	moveFirstSlide();

	var move = 0;
		$("#right-button").click(function(){
    	move += 550;
    	$("#carousel ul").animate({
      	marginLeft: move+"px"
    	}, 500);
	});

		$("#left-button").click(function(){
    	move -= 550;
    	$("#carousel ul").animate({
      	marginLeft: move+"px"
    	}, 500);
	});

});	






















