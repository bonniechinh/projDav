$(function() {
	$('#recall-img').mouseenter(function() {
		var docWidth = $(document).width() - 750; //250 = img width & extra spacing
		var nextLeft = Math.floor(Math.random() * docWidth);
		var currLeft = parseInt($('#recall-img').css('left'));
		while(Math.abs(nextLeft-currLeft) < 200 || Math.abs(nextLeft-currLeft) > 350) {
			nextLeft = Math.floor(Math.random() * docWidth);
		}
		$(this).animate({left: nextLeft + 'px'}, 800);
	});
});