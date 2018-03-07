(function() {
	'use strict';
	$(window).ready(function(){
		$(".search").click(function(){
			$(".overlay-search").toggleClass("focus-search");
			$("#search-inner").focus();
		});
		$(".search-close").click(function(){
			$(".overlay-search").removeClass("focus-search");
		});

		$("#myNavbar a").on('click', function(e) {
			$(this).parents(".navbar-collapse").removeClass("in");
			if (this.hash !== "") {
				
				e.preventDefault();
		
				
				var hash = this.hash;
		
				
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
			}
		});
		$(".special-request a").on('click', function(e) {
			if (this.hash !== "") {
				
				e.preventDefault();
		
				
				var hash = this.hash;
		
				
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
			}
		});
		$('.portfolio-item').click(function(){
			$('.modal-body').empty();

			var title = $(this).attr("title");

			$('.modal-title').html(title);

			var content = $(this).children('.portfolio-item-image').html();

			$(content).appendTo('.modal-body');

			$('#myModal').modal({show:true});
		});
		$('#myTabs a').click(function (e) {

			e.preventDefault();
			$(this).tab('show');

		});
		$('#myCarousel').carousel({
			interval: 3000
		});
		$('#myPortfolioCarousel').carousel({
			interval: 3000
		});
		$('#myTestimonials').carousel({
			interval: 3000
		});

		$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');

		$(".progress-bar").each(function(){
			var each_bar_width = $(this).attr('aria-valuenow');

			$(this).width(each_bar_width + '%');
		});
		// portfolio items fadeIn
		// $("#get-more").toggle(function(){
		// 	$(".hideItems").show();
		// });
		// $(document).ready(function() {
		// 	$(window).scroll( function(){
		// 		$('.hideme').each( function(i){
		// 			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		// 			var bottom_of_window = $(window).scrollTop() + $(window).height();
		// 			if( bottom_of_window > bottom_of_object ){
		// 				$(this).animate({'opacity':'1'},1000);
		// 			}
		// 		});
		// 	});
		// });
	});
	



})();
