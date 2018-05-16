$(document).ready(function () {

if ($(window).width() <= 624) { 
		$('.mobileFeatureListButtonOpen').show();
	}
	 if ($(window).width() <= 516) { 
		$('.mobileFormButtonOpen').show();
	}
	else {
		$('.mobileFeatureListButtonOpen').hide();
		$('.mobileFormButtonOpen').hide();
	}

});