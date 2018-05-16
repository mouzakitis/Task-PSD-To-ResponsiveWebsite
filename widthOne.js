$(document).ready(function () {
	if ($(window).width() <= 624) {

		$('.mobileFeatureListButtonOpen').show();	
		$('.mobileFeatureListButtonOpen').click( function () {
			$('.mobileFeatureList').animate({height:'280px'},200);
				$('.mainBox3').animate({top:'2350px'},200);
				$('footer').animate({top:'2950px'},200);
				$('.mobileFeatureListButtonOpen').hide();
				$('.mobileFeatureListButtonClose').show();
		});

		$('.mobileFeatureListButtonClose').click( function () {
			$('.mobileFeatureList').animate({height:'60px'},200);
				$('.mainBox3').animate({top:'2140px'},200);
				$('footer').animate({top:'2750px'},200);
				$('.mobileFeatureListButtonClose').hide();
				$('.mobileFeatureListButtonOpen').show();
		});

	} else{

		$('.mobileFeatureListButtonOpen').hide();	
	}
});