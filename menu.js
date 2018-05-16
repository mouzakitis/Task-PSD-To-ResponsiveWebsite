$(document).ready(function () {
	$('.menu').click( function () {

		if ($( ".barMenu" ).is( ".closeBarMenu" ) ) {
			$('.barMenu').removeClass("closeBarMenu");
					$(".barMenu").animate({width: "170px" , height :'220px'}, 500, function () {
						$(".barListMenu").animate({'opacity': 1}, 100);
							$(".barMenu").show();
							$(".barListMenu").show();
							$('.barMenu').addClass("openBarMenu");
				});

		}if ( $( ".barMenu" ).is( ".openBarMenu" ) ) {
					$(".barListMenu").animate({'opacity': 0}, 100, function () {
					$(".barMenu").animate({width: "0px" , height :'0px'}, 500, function () {
						$('.barMenu').removeClass("openBarMenu");
						$('.barMenu').addClass("closeBarMenu");
						$(".barMenu").hide();
						$(".barListMenu").hide();
					});
				});
		}
	});

});