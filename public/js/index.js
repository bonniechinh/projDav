// $(function hoverYes() {
// 	var timer;
// 	$('#btn-yes').mouseenter(function() {
// 		timer = setTimeout(function() {
// 			playYes();
// 		}, 2000);
// 	}).mouseleave(function() {
// 		clearTimeout(timer);
// 	});
// });

// $(function hoverNo() {
// 	var timer;
// 	$('#btn-no').mouseenter(function() {
// 		timer = setTimeout(function() {
// 			playNo();
// 		}, 2000);
// 	}).mouseleave(function() {
// 		clearTimeout(timer);
// 	});
// });

function playYes() {
	var audio = document.getElementById("yes");
	audio.play();
}

function playNo() {
	var audio = document.getElementById("no");
	audio.play();
}

function toggleBtns() {
	$('#btn-yes').toggle();
	$('#btn-no').toggle();
};

$(function hoverVote() {
	$('#btn-vote').mouseenter(function() {
		voting();
	});
});


function voting() {
	var audio = document.getElementById('voting');
	audio.play();
}

$(function() {
	var timerID = setInterval(toggleBtns, 5000);
})