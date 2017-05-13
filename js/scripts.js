$(function(){
	var carouselList = $('#carousel ul');	//ten kod wykona się po załadowaniu DOM
});	

setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd

$(changeSlides(){
	carouselList.animate({'marginLeft':-550}, 500, moveFirstSlide);
});	 

$(moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last")
	
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
});

$('#right').on('click', function(){
   carouselList.animate({scrollLeft: -firstItem}, 500);
});


$('#left').on('click', function(){
    carouselListl.animate({scrollLeft: firstItem}, 500);
});
























