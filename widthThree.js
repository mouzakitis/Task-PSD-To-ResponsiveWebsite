$(document).ready(function () {
	
	if ($(window).width() <= 516) { 

		$('.mobileFormButtonOpen').click( function () {
			$('.mobileFormButtonOpen').addClass('mobileFormButtonOpenActive');
			$('.mobileFormButtonClose').removeClass('mobileFormButtonCloseActive');
			$('.searchForm').animate({height:'280px'},200);
			$('.mobileFeatureListButtonOpen').animate({top:'385px'},200);
			$('.mobileFeatureListButtonClose').animate({top:'385px'},200);
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').show();
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').animate({'opacity':'1'},200);
			$('.mobileFormButtonOpen').hide();
			$('.mobileFormButtonClose').show();
			$('.mainBox3').animate({top:'2290px'},200);
			$('footer').animate({top:'2970px'},200);
			if ($( ".mobileFeatureListButtonOpen" ).is( ".mobileFeatureListButtonOpenActive") ) {
				$('.mainBox3').animate({top: "2500px"},100);
				$('footer').animate({top:'3180px'},200);
			}
		});

		$('.mobileFormButtonClose').click( function () {

			$('.mobileFormButtonOpen').removeClass('mobileFormButtonOpenActive');
			$('.mobileFormButtonClose').addClass('mobileFormButtonCloseActive');
			$('.searchForm').animate({height:'60px'},200);
			$('.mobileFeatureListButtonOpen').animate({top:'167px'},200);
			$('.mobileFeatureListButtonClose').animate({top:'167px'},200);
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').hide();
			$('.inputSearch, .inputYear, .inputAuthor, .fa-search , .fa-calendar-alt, .fa-user, .btn').animate({'opacity':'0'},200);
			$('.mobileFormButtonOpen').show();
			$('.mobileFormButtonClose').hide();
			$('.mainBox3').animate({top:'2070px'},200);
			$('footer').animate({top:'2755px'},200);
		});

		$('.mobileFeatureListButtonOpen').click( function () {

			$('.mobileFeatureListButtonClose').removeClass('mobileFeatureListButtonCloseActive');
			$('.mobileFeatureListButtonOpen').addClass('mobileFeatureListButtonOpenActive');
			$('.mainBox3').animate({top:'2290px'},200);
			$('footer').animate({top:'2970px'},200);
			if ($( ".mobileFormButtonOpen" ).is( ".mobileFormButtonOpenActive") ) {
				$('.mainBox3').animate({top: "2500px"},100);
				$('footer').animate({top:'3180px'},200);

			}

		});

		$('.mobileFeatureListButtonClose').click( function () {
			$('.mobileFeatureListButtonClose').addClass('mobileFeatureListButtonCloseActive');
			$('.mobileFeatureListButtonOpen').removeClass('mobileFeatureListButtonOpenActive');
			$('.mainBox3').animate({top:'2070px'},200);
			$('footer').animate({top:'2775px'},200);
		});

	}
});