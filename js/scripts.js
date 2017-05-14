$(function() {
	
	setInterval(changeSlides, 3000); //co 3 sek. wykona funk

	var carouselList = $('#carousel ul');	//ten kod wykona się po załadowaniu DOM

	function changeSlides() {
		carouselList.animate({'marginLeft':-550}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
	
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	};

	function moveLastSlide() {
		var firstItem = carouselList.find("li:last");
		var lastItem = carouselList.find("li:first");
	
		lastItem.before(firstItem);
		carouselList.css({marginLeft: 0});
	};

	changeSlides();
		moveFirstSlide();
		moveLastSlide();

		$("#right-button").on('click', moveFirstSlide);
		$("#left-button").on('click', moveLastSlide);
});	






















