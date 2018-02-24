$(function() {

	(function ($) { 
		$('.game-list').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.game-list li').click(function (g) { 
			var tab = $(this).closest('.top-line'), 
				index = $(this).closest('li').index();
				console.log('click!');
			
			tab.find('ul.game-list > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			$('.servers').find('div.servers-tab').not('div.servers-tab:eq(' + index + ')').hide();
			$('.servers').find('div.servers-tab:eq(' + index + ')').show();
			
			g.preventDefault();
		} );
	})(jQuery);

});