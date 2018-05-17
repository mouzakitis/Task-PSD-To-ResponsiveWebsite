$(document).ready(function () {

	$(window).on('resize', function() {


		if ($(window).width() <= 625) {

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

		}if ($(window).width() >= 517) {
						$('.mobileFormButtonOpen').hide();
		}if ($(window).width() >= 625) {
			$('.mobileFeatureListButtonOpen').hide();
		}

	});

});