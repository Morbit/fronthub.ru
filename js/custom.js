/*
	Template Name: Eventime -  Conference &amp; Event HTML Template
	Author: Themefunction
	Author URI: https://themeforest.net/user/themefunction
	Description: Eventime -  Conference &amp; Event HTML Template
	Version: 1.0

	1. Preload
	2. Mobile Menu
	3. Main Slideshow
	4. Gallery popup
	5. Counter
	6. Contact form
	7. Back to top

*/


jQuery(function($) {
  "use strict";

  	/* ----------------------------------------------------------- */
	/*  Preload
	/* ----------------------------------------------------------- */

	function handlePreloader() {

		if($('.preload').length){
			$('.preload').delay(220).fadeOut(500);
		}
	}


	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function() {
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  Main slideshow
	/* ----------------------------------------------------------- */

		$('#main-slide').carousel({
			pause: true,
			interval: 100000,
		});


	/* ----------------------------------------------------------- */
	/*  Gallery popup
	/* ----------------------------------------------------------- */

	  $(document).ready(function(){

			$(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade", innerHeight:"700"});

	  });



	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

	  // Set the date we're counting down to
	  var countDownDate = new Date("Nov 11, 2017 11:00:00").getTime();

	  // Update the count down every 1 second
	  var x = setInterval(function () {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now an the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with id="demo"
		  var template = `<div class="counter-day">
								<span class="days">${days}</span>
								<div class="smalltext">дней</div>
							</div>
							<div class="counter-hour">
								<span class="hours">${hours}</span>
								<div class="smalltext">часов</div>
							</div>
							<div class="counter-minute">
								<span class="minutes">${minutes}</span>
								<div class="smalltext">минут</div>
							</div>
							<div class="counter-second">
								<span class="seconds">${seconds}</span>
								<div class="smalltext">секунд</div>
							</div>`
		  document.getElementById("demo").innerHTML = template;

		  // If the count down is finished, write some text 
		  if (distance < 0) {
			  clearInterval(x);
			  document.getElementById("demo").innerHTML = "";
		  }
	  }, 1000);



	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});

		$('#back-to-top').tooltip('hide');



		/* Preloader */

		$(document).ready(function () {
			handlePreloader();
		});


});
