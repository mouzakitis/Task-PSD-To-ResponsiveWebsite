$(document).ready(function () {
	if ($(window).width() <= 624) {

		$('.mobileFeatureListButtonOpen').show();	
		$('.mobileFeatureListButtonOpen').click( function () {
			$('.mobileFeatureList').animate({height:'280px'},200);
				$('.mobileFeatureListButtonOpen').hide();
				$('.mobileFeatureListButtonClose').show();
		});

		$('.mobileFeatureListButtonClose').click( function () {
			$('.mobileFeatureList').animate({height:'60px'},200);
				$('.mobileFeatureListButtonClose').hide();
				$('.mobileFeatureListButtonOpen').show();
		});

	} else{

		$('.mobileFeatureListButtonOpen').hide();	
	}
});