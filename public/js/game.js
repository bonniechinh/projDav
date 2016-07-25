var hover;
var timerID;
var timeOver = false;

function startGame() {
	$('.startPage').hide();
	$('.time-text').show();
	hover = false;
	timerID = setInterval(countdown, 1000);
	makeBtn();
}

function startV2() {
	$('.startPage').hide();
	$('.time-text').show();
	hover = true;
	timerID = setInterval(countdown, 1000);
	makeBtn();
}

//Timer countdown
function countdown() {
	$('.timer').each(function() {
		var time = parseInt($(this).html());
		if(time !==0) {
			$(this).html(time-1);
		} else {
			timeOver = true;
			$('.clickable').remove();
			gameOverScreen();
			return;
		}
	});
}

//Create circle w/ random size and color
var num = 0
function makeBtn() {
    var btnsize = ((Math.random()*100) + 150).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<button/>').css({
        'width':btnsize + 'px',
        'height':btnsize + 'px',
        'background-color': color,
        'border-radius': 200 + 'px'
    });

    var posx = (Math.random() * ($(document).width() - btnsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - btnsize)).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).addClass('clickable').fadeIn(500);

    //Playing V1: Remove clicked circle & call makeBtn to make new circle
    if (!hover) {
		$newdiv.click(function() {
			num += 1;
			console.log("clicked: ", num);
			$(this).prop('disabled', true);		//disable button to prevent counting multiple clicks
			$(this).fadeOut(200).delay(200, function() {
				$(this).remove();
				if(timeOver) {
					return;
				}
				makeBtn();
			});
		});
    } else {	//Playing V2; hover is true
    	$newdiv.hover(function() {
    		num += 1;
    		console.log("clicked:", num);
    		$(this).prop('disabled', true);		//disable button to prevent counting hover twice
    		$(this).fadeOut(800).delay(200, function() {
    			$(this).remove();
    			if(timeOver) {
    				return;
    			}
    			makeBtn();
    		});
    	});
    }
}

//Screen shown when time is up
function gameOverScreen() {
	$(".restart").show();
	$(".time-text").hide();		//hide timer countdown
	
	$timeUp = $('<h2/>');
	$timeUp.css({
		'text-align': 'center',
		'padding-top': 200 + 'px'
	}).text("Time's up!").appendTo('.restart');

	$endMessage = $('<h1/>');
	$endMessage.css({
		'text-align': 'center'
	}).text("Score: " + num).appendTo('.restart');
	clearInterval(timerID);

	$restart = $('<button/>').css({
		'text-align': 'center'
	}).text("Try Again?").appendTo('.restart').addClass('btn btn-danger btn-lg');

	//Button to play other version
	$playOther = $('<button/>').css({
		'text-align': 'center'
	}).addClass('btn btn-primary btn-lg').appendTo('.restart');
	if(hover) {
		$playOther.text('Play V1');
	} else {
		$playOther.text('Play V2');
	}

	//Restart game to play same version
	$restart.click(function() {
		//clear screen
		$timeUp.remove();
		$endMessage.remove();
		$restart.remove();
		$playOther.remove();

		//reset score and timer
		num = 0;
		$('.timer').html(60);
		timeOver = false;

		//restart
		if(hover) {		//restart V2
			startV2();
		} else {		//restart V1
			startGame();
		}
	});

	//Play a different version
	$playOther.click(function() {
		//clear screen
		$timeUp.remove();
		$endMessage.remove();
		$restart.remove();
		$playOther.remove();

		//reset score and timer
		num = 0;
		$('.timer').html(60);
		timeOver = false;

		//play version
		if(hover) {
			startGame();
		} else {
			startV2();
		}
	});
}