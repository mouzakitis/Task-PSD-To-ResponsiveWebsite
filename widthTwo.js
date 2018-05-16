$(document).ready(function () {
	if ($(window).width() <= 554) { 

		$('.mobileFeatureListButtonOpen').click( function () {
			$('.mainBox3').animate({top:'2390px'},200);
			$('footer').animate({top:'3050px'},200);
		});
		$('.mobileFeatureListButtonClose').click( function () {
			$('.mainBox3').animate({top:'2170px'},200);
			$('footer').animate({top:'2830px'},200);
		});
	}
});