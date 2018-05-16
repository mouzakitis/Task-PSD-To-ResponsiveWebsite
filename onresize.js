$(document).ready(function () {

	$(window).on('resize', function() {


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

			} if ($(window).width() <= 554) { 
				$('.mobileFeatureListButtonOpen').click( function () {
					$('.mainBox3').animate({top:'2390px'},200);
					$('footer').animate({top:'3050px'},200);
				});
				$('.mobileFeatureListButtonClose').click( function () {
					$('.mainBox3').animate({top:'2170px'},200);
					$('footer').animate({top:'2830px'},200);
				});

			}if ($(window).width() <= 516) { 
				$('.mobileFormButtonOpen').show();
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

			}if ($(window).width() <= 516) { 

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

		}if ($(window).width() <= 500) { 

				$('.mobileFormButtonOpen, .mobileFeatureListButtonOpen').click( function () {
					$('.mainBox3').animate({top:'3180px'},200);
					$('footer').animate({top:'3860px'},200);
				});
				$('.mobileFormButtonClose, .mobileFeatureListButtonClose').click( function () {
					$('.mainBox3').animate({top:'195px'},200);
					$('footer').animate({top:'245px'},200);
				});

		}if ($(window).width() >= 516) {
						$('.mobileFormButtonOpen').hide();
		}if ($(window).width() >= 624) {
			$('.mobileFeatureListButtonOpen').hide();
		}

	});

});