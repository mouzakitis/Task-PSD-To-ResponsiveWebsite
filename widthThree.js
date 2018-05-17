$(document).ready(function () {
	
	if ($(window).width() <= 516) { 

		$('.mobileFormButtonOpen').click( function () {
			$('.searchForm').animate({height:'280px'},200);
			$('.mobileFeatureListButtonOpen').animate({top:'385px'},200);
			$('.mobileFeatureListButtonClose').animate({top:'385px'},200);
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').show();
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').animate({'opacity':'1'},200);
			$('.mobileFormButtonOpen').hide();
			$('.mobileFormButtonClose').show();
		});

		$('.mobileFormButtonClose').click( function () {
			$('.searchForm').animate({height:'60px'},200);
			$('.mobileFeatureListButtonOpen').animate({top:'167px'},200);
			$('.mobileFeatureListButtonClose').animate({top:'167px'},200);
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').hide();
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').animate({'opacity':'0'},200);
			$('.mobileFormButtonOpen').show();
			$('.mobileFormButtonClose').hide();
		});

	}
});