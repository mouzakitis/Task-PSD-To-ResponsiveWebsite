$(document).ready(function () {
	
	if ($(window).width() <= 500) { 

		$('.mobileFormButtonOpen, .mobileFeatureListButtonOpen').click( function () {
			$('.mainBox3').animate({top:'190px'},200);
			$('footer').animate({top:'230px'},200);
		});
		$('.mobileFormButtonClose, .mobileFeatureListButtonClose').click( function () {
			$('.mainBox3').animate({top:'195px'},200);
			$('footer').animate({top:'245px'},200);
		});

	}
});